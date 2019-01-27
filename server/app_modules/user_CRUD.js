const bcrypt = require("bcryptjs");
var ObjectId = require("mongodb").ObjectID;
var MongoClient = require("mongodb").MongoClient;
//Data base
const dbName = "shops";
const url = "mongodb://kaolaa:kaola77@ds141924.mlab.com:41924/shops";

//finding user by id
exports.findUserById = async function(id, callback) {
  MongoClient.connect(url).then(client => {
    client
      .db(dbName)
      .collection("users")
      .findOne({ _id: id })
      .then(results => {
        callback(results);
      })
      .catch(err => {
        throw err;
      });
  });
};

//creating a new user using passport auth
exports.createUser = async function(formData, callback) {
  // if (!db.error) {
  //   let errors = TestPasword();
  //   if (errors.length > 0) {
  //     reponse = {
  //       errors: errors,
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //       password2: req.body.password2
  //     };
  //   } else {

  MongoClient.connect(url)
    .then(client => {
      client
        .db(dbName)
        .collection("users")
        .findOne({ email: formData.email })
        .then(user => {
          if (user) {
            callback({ err: "Email déja utilisé" });
          } else {
            const newUser = {
              FirstName: formData.Firstname,
              LastName: formData.Lastname,
              email: formData.email,
              password: formData.password
            };
            bcrypt.genSalt(10).then(salt => {
              bcrypt.hash(newUser.password, salt).then(hash => {
                newUser.password = hash;
                client
                  .db(dbName)
                  .collection("users")
                  .insertOne(newUser)
                  .then(inserted => {
                    callback({ data: "Ajout réussi " + inserted.ops[0]._id });
                  });
              });
            });
          }
        });
    })
    .catch(err => {
      throw err;
    });
};

/********************************* SHOPS *************************************/

//liking a shop
exports.likeShop = async function(iduser, idshop, callback) {
  MongoClient.connect(url).then(client => {
    client
      .db(dbName)
      .collection("users")
      .update(
        { _id: ObjectId(iduser) },
        {
          $addToSet: {
            likedShops: {
              idShop: idshop
            }
          }
        }
      )
      .then(result => {
        callback({
          msg: "Updated",
          result: result
        });
      })
      .catch(err => {
        throw err;
      });
  });
};
//disliking a shop
exports.dislikeShop = async function(iduser, idshop, callback) {
  MongoClient.connect(url).then(client => {
    client
      .db(dbName)
      .collection("users")
      .update(
        { _id: ObjectId(iduser) },
        {
          $addToSet: {
            dislikedShops: {
              idShop: idshop,
              date: Date.now()
            }
          }
        }
      )
      .then(result => {
        callback({
          msg: "Updated",
          result: result
        });
      })
      .catch(err => {
        throw err;
      });
  });
};

//removing a like from a shop
exports.removeShop = async function(iduser, idshop, callback) {
  MongoClient.connect(url).then(client => {
    client
      .db(dbName)
      .collection("shops")
      .update(
        { _id: ObjectId(iduser) },
        { $pull: { likedShops: { idShop: idshop } } }
      )
      .then(result =>
        callback({
          msg: "Updated",
          result: result
        })
      )
      .catch(err => {
        throw err;
      });
  });
};

exports.findShopliked = function(iduser, callback) {
  MongoClient.connect(url).then(async client => {
    const db = client.db(dbName);
    // finding liked shops of the user
    db.collection("users")
      .findOne({ _id: ObjectId(iduser) })
      .then(data => {
        const arrayid = [];

        if (data.likedShops) {
          data.likedShops.forEach(shop => {
            // putting ids in an array of ObjectId
            arrayid.push(new ObjectId(shop.idShop));
          });
        }
        return arrayid;
      })
      //finding the shops objects in shops collection
      .then(results => {
        db.collection("shops")
          .find({
            _id: {
              $in: results
            }
          })
          .toArray()
          .then(data => {
            callback(data);
          });
      });
  });
};

//finding unliked shops
//40km Near
//and not disliked in 2 hours
exports.findShopsHome = function(coord, iduser, callback) {
  MongoClient.connect(url).then(client => {
    const db = client.db(dbName);
    db.collection("users")
      .findOne({ _id: ObjectId(iduser) })
      .then(user => {
        const idliked = [];
        const iddisliked = [];
        // finding liked shops of the user
        if (user.likedShops) {
          user.likedShops.forEach(shop => {
            idliked.push(new ObjectId(shop.idShop));
          });
        }
        // finding disliked shops in 2 hours of the user
        if (user.dislikedShops) {
          user.dislikedShops.forEach(shop => {
            if (liked2hours(shop.date)) {
              iddisliked.push(new ObjectId(shop.idShop));
            }
          });
        }
    
        //finding near shops
        db.collection("shops")
          .aggregate([
            {
              $geoNear: {
                near: {
                  type: "Point",
                  coordinates: [parseFloat(coord.lng), parseFloat(coord.lat)]
                },
                spherical: true,
                distanceField: "distance",
                maxDistance: 40000
              }
            },
            {
              $match: {
                _id: { $nin: iddisliked },
                _id: { $nin: idliked },
                // 
              }
            }
          ])
          .get().then(data => {
            
              callback(data);
            
          });
      })
      .catch(err => {
        throw err;
      });
  });
};

function TestPasword() {
  let errors = [];
  if (formData.password != formData.password2) {
    errors.push({
      text: "Les mots de passe saisis ne sont pas identiques"
    });
  }

  if (formData.password.length < 4) {
    errors.push({
      text: "Le mot de passe doit contenir aux moins 4 caractères "
    });
  }

  return errors;
}

function liked2hours(THEdate) {
  let DislikedDate = new Date(THEdate);
  let nowDate = new Date(Date.now());
  // disliked today
  if (
    DislikedDate.withoutTime().getTime() === nowDate.withoutTime().getTime()
  ) {
    if (Math.floor((nowDate - DislikedDate) / 60e3) < 120) {
      // less than 2 hours
      return true;
    } else return false;
  }
}
Date.prototype.withoutTime = function() {
  var d = new Date(this);
  d.setHours(0, 0, 0, 0);
  return d;
};

module.exports = exports;
