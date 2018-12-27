const bcrypt = require("bcryptjs");
const passport = require("passport");
const key = require("../conf/key");
const mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectID;

var assert = require("assert");

//Data base
const dbName = "shops";

//finding user by id
exports.findUserById = async function(id, callback) {
  const Collection = await GetCollection("users");

  await Collection.findOne({ _id: id }, function(err, data) {
    let reponse;
    if (!err) {
      callback(data);
    } else {
      reponse = {
        error: err,
        msg: "error"
      };
    }
    callback(reponse);
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

  const Collection = await GetCollection("users");

  await Collection.findOne({ email: formData.email }).then(user => {
    let reponse;
    if (user) {
      reponse = {
        succes: false,
        msg: "Email déja utilisé"
      };
      callback(reponse);
    } else {
      const newUser = {
        FirstName: formData.nom,
        LastName: formData.prenom,
        email: formData.email,
        password: formData.password
      };
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          Collection.insertOne(newUser, function(err, inserted) {
            if (!err) {
              callback("Ajout réussi " + inserted.ops[0]._id);
            } else {
              reponse = {
                error: err,
                msg: "Problème à l'insertion"
              };
              callback(reponse);
            }
          });
        });
      });
    }
  });
};

/********************************* SHOPS *************************************/

//liking a shop
exports.likeShop = async function(iduser, idshop, callback) {
  const Collection = await GetCollection("users");
  if (Collection) {
    await Collection.update(
      { _id: ObjectId(iduser) },
      {
        $addToSet: {
          likedShops: {
            idShop: idshop
          }
        }
      },
      function(err, result) {
        if (result) {
          callback("Updated: shop liked " + result);
        } else {
          let reponse = { error: err, msg: "Error: can't update the user " };
          callback(reponse);
        }
      }
    );
  } else {
    let reponse = {
      error: err,
      msg: "Error: error in geting the user collection."
    };
    callback(reponse);
  }
};

//disliking a shop
exports.dislikeShop = async function(iduser, idshop, callback) {
  const Collection = await GetCollection("users");
  if (Collection) {
    await Collection.update(
      { _id: ObjectId(iduser) },
      {
        $addToSet: {
          dislikedShops: {
            idShop: idshop,
            date: Date.now()
          }
        }
      },
      function(err, result) {
        if (!err) {
          callback("Updated: shop disliked " + result);
        } else {
          const reponse = {
            error: err,
            msg: "Error: can't update the user "
          };
          callback(reponse);
        }
      }
    );
  } else {
    const reponse = (reponse = {
      error: err,
      msg: "Error: error in geting the user collection."
    });
    callback(reponse);
  }
};

//removing a like from a shop
exports.removeShop = async function(iduser, idshop, callback) {
  const Collection = await GetCollection("users");
  let reponse;
  if (Collection) {
    await Collection.update(
      { _id: ObjectId(iduser) },
      {
        $pull: { likedShops: { idShop: idshop } }
      },
      function(err, result) {
        if (result) {
          callback("Updated: shop removed " + result);
        } else {
          reponse = { error: err, msg: "Error: can't find the liked shop " };
        }
        callback(reponse);
      }
    );
  } else {
    reponse = { error: err, msg: "Error: error in geting the user collection" };
    callback(reponse);
  }
};

//finding liked shops
exports.findShopliked = async function(iduser, callback) {
  const CollectionS = await GetCollection("shops");
  if (CollectionS) {
    getLikedShopsIds(iduser, async results => {
      if (results.message) {
        callback(results);
      } else {
        //finding the shops objects in shops collection
        await CollectionS.find({ _id: { $in: results } }).toArray(
          (err, data) => {
            if (data) {
              callback(data);
            } else {
              let reponse = {
                error: err,
                msg: "error : can't get list of liked shops"
              };
              callback(reponse);
            }
          }
        );
      }
    });
  } else {
    let reponse = { error: err, msg: "error : can't get shops collection " };
    callback(reponse);
  }
};

//finding unliked shops
exports.findShopunliked = async function(iduser, callback) {
  const CollectionS = await GetCollection("shops");
  if (CollectionS) {
    getLikedShopsIds(iduser, async results => {
      if (results.message) {
        // if there is an error message
        callback(results);
      } else {
        //finding the shops objects in shops collection
        await CollectionS.find({ _id: { $nin: results } }).toArray(
          (err, data) => {
            if (data) {
              callback(data);
            } else {
              let reponse = {
                error: err,
                msg: "error : can't get list of shops"
              };
              callback(reponse);
            }
          }
        );
      }
    });
  } else {
    let reponse = { error: err, msg: "error : can't get shops collection" };
    callback(reponse);
  }
};

//finding unliked Near shops
exports.findShopunlikedNear = async function(coord, iduser, callback) {
  const CollectionS = await GetCollection("shops");
  if (CollectionS) {
    getLikedShopsIds(iduser, async results => {
      if (results.message) {
        // if there is an error message
        callback(results);
      } else {
        //finding near unliked shops objects in shops collection sorted by distance withing 10000 m
        await CollectionS.aggregate([
          {
            $geoNear: {
              near: {
                type: "Point",
                coordinates: [parseFloat(coord.lng), parseFloat(coord.lat)]
              },
              spherical: true,
              distanceField: "distance",
              maxDistance: 10000
            }
          },
          { $match: { _id: { $nin: results } } }
        ]).get((err, data) => {
          if (data) {
            callback(data);
          } else {
            reponse = {
              error: err,
              msg: "error : can't get list of near shops"
            };
            callback(reponse);
          }
        });
      }
    });
  }
};

//finding unliked shops
//10000m Near
//and not disliked in 2 hours

exports.findShopunlikedNearNOTdisliked = async function(
  coord,
  iduser,
  callback
) {
  const CollectionS = await GetCollection("shops");
  if (CollectionS) {
    //liked shops
    getLikedShopsIds(iduser, async resultsliked => {
      if (resultsliked.error) {
        // if there is an error message
        callback(resultsliked);
      } else {
        //disliked shops
        getdislikedShopsIn2hours(iduser, async resultsdisliked => {
          if (resultsdisliked.error) {
            // if there is an error message
            callback(resultsdisliked);
          } else {
            //finding near unliked not disliked shops objects in shops collection sorted by distance withing 10000 m
            await CollectionS.aggregate([
              {
                $geoNear: {
                  near: {
                    type: "Point",
                    coordinates: [parseFloat(coord.lng), parseFloat(coord.lat)]
                  },
                  spherical: true,
                  distanceField: "distance",
                  maxDistance: 10000
                }
              },
              { $match: { _id: { $nin: resultsdisliked } , _id: { $nin: resultsliked } } } // unliked shops
            ]).get((err, data) => {
              if (data) {
                callback(data);
              } else {
                reponse = {
                  error: err,
                  msg: "error : can't get list of near shops"
                };
                callback(reponse);
              }
            });
          }
        });
      }
    });
  }
};

// exports.deleteuser = function(id, callback) {
//   MongoClient.connect(
//     url,
//     function(err, client) {
//       var db = client.db(dbName);

//       if (!err) {
//         let myquery = { _id: ObjectId(id) };

//         db.collection("users").deleteOne(myquery, function(err, result) {
//           if (!err) {
//             reponse = {
//               succes: true,
//               result: result,
//               error: null,
//               msg: "Suppression réussie " + result
//             };
//           } else {
//             reponse = {
//               succes: false,
//               error: err,
//               msg: "Problème à la suppression"
//             };
//           }
//           callback(reponse);
//         });
//       } else {
//         let reponse = (reponse = {
//           succes: false,
//           error: err,
//           msg: "Problème lors de la suppression, erreur de connexion."
//         });
//         callback(reponse);
//       }
//     }
//   );
//
// };

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

async function getLikedShopsIds(iduser, callback) {
  const CollectionU = await GetCollection("users");
  // finding ids of liked shops
  await CollectionU.findOne(
    { _id: ObjectId(iduser) },
    { "likedShops.idShop": 1 },
    async (err, data) => {
      if (data) {
        if (data.likedShops) {
          let arrayid = [];
          // putting them in an array of ObjectId
          data.likedShops.forEach(shop => {
            arrayid.push(new ObjectId(shop.idShop));
          });
          callback(arrayid);
        } else {
          callback({
            message: "error : no liked shops"
          });
        }
      } else {
        callback({ error: err, message: "error : can't get info of the user" });
      }
    }
  );
}
//$hour
async function getdislikedShopsIn2hours(iduser, callback) {
  const CollectionU = await GetCollection("users");
  // finding ids of disliked shops
  await CollectionU.findOne(
    { _id: ObjectId(iduser) },
    { "dislikedShops.date": 1 },
    (err, data) => {
      if (data) {
        if (data.dislikedShops) {
          let arrayid = [];
          //getting the last disliked shops in two hours
          data.dislikedShops.forEach(shop => {
            let dD = new Date(shop.date); //dD disliked Date
            let nD = new Date(Date.now()); //nD now Date
            // disliked today
            if (dD.withoutTime().getTime() === nD.withoutTime().getTime()) { 
            // 120 minutes  == 2 hours  
            if (Math.floor((nD - dD) / 60e3) < 120)
                // putting them in an array of ObjectId
                arrayid.push(new ObjectId(shop.idShop));
            }
          });
          callback(arrayid);
        }
        else {
          callback({
            message: "error : no disliked shops withing two hours "
          });
        }
      } else {
        reponse = {
          error: err,
          msg: "error : can't get info of the user"
        };
        callback(reponse);
      }
    }
  );
}

Date.prototype.withoutTime = function() {
  var d = new Date(this);
  d.setHours(0, 0, 0, 0);
  return d;
};

async function GetCollection(name) {
  const client = await mongodb.MongoClient.connect(
    "mongodb://kaolaa:kaola77@ds141924.mlab.com:41924/shops",
    {
      useNewUrlParser: true
    }
  );

  return client.db(dbName).collection(name);
}
module.exports = exports;
