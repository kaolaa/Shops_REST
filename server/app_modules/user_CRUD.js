const bcrypt = require("bcryptjs");
const passport = require("passport");
const key = require("../conf/key");
const mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectID;

var assert = require("assert");

//monogodb
const dbName = "shops";

exports.findUserById = async function(id, callback) {
  const Collection = await GetCollection("users");

  await Collection.findOne({ _id: id }, function(err, data) {
    let reponse;

    if (!err) {
      reponse = {
        succes: true,
        restaurant: data,
        error: null,
        msg: "Details of the user"
      };
    } else {
      reponse = {
        succes: false,
        restaurant: null,
        error: err,
        msg: "error"
      };
    }
    callback(reponse);
  });
};

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

          Collection.insertOne(newUser, function(err, insertedId) {
            if (!err) {
              reponse = {
                succes: true,
                result: insertedId.ops[0]._id,
                error: null,
                msg: "Ajout réussi " + insertedId.ops[0]._id
              };
            } else {
              reponse = {
                succes: false,
                error: err,
                msg: "Problème à l'insertion"
              };
            }
            callback(reponse);
          });
        });
      });
    }
  });
};

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
        if (!err) {
          reponse = {
            succes: true,
            result: result,
            error: null,
            msg: "Modification réussie " + result
          };
        } else {
          reponse = {
            succes: false,
            error: err,
            msg: "Problème à la modification"
          };
        }
        callback(reponse);
      }
    );
  } else {
    let reponse = (reponse = {
      succes: false,
      error: err,
      msg: "Problème lors de la modification, erreur de connexion."
    });
    callback(reponse);
  }
};

exports.removeShop = async function(iduser, idshop, callback) {
  const Collection = await GetCollection("users");

  if (Collection) {
    await Collection.update(
      { _id: ObjectId(iduser) },
      {
        $pull: {
          likedShops: {
            idShop: idshop
          }
        }
      },
      function(err, result) {
        if (!err) {
          reponse = {
            succes: true,
            result: result,
            error: null,
            msg: "Modification réussie " + result
          };
        } else {
          reponse = {
            succes: false,
            error: err,
            msg: "Problème à la modification"
          };
        }
        callback(reponse);
      }
    );
  } else {
    let reponse = (reponse = {
      succes: false,
      error: err,
      msg: "Problème lors de la modification, erreur de connexion."
    });
    callback(reponse);
  }
};

exports.displayShopliked = async function(iduser, callback) {
  const CollectionS = await GetCollection("shops");
  const CollectionU = await GetCollection("users");

  if (CollectionS && CollectionU) {
    await CollectionU.findOne(
      { _id: ObjectId(iduser) },
      {
        "likedShops.idShop": 1,
        _id: 0
      },
      async function(err, data) {
        let listliked = getlistidliked(data.likedShops);

        await CollectionS.find({ _id: { $in: listliked } }).toArray(function(
          err,
          data
        ) {
          let reponse;

          if (!err) {
            reponse = {
              succes: true,
              restaurant: data,
              error: null,
              msg: "Details of the user"
            };
            callback(reponse);
          } else {
            reponse = {
              succes: false,
              restaurant: null,
              error: err,
              msg: "error"
            };
            callback(reponse);
          }
        });
      }
    );
  }
};

exports.displayShopunliked = async function(iduser, callback) {
  const CollectionS = await GetCollection("shops");
  const CollectionU = await GetCollection("users");

  if (CollectionS && CollectionU) {
    await CollectionU.findOne(
      { _id: ObjectId(iduser) },
      {
        "likedShops.idShop": 1,
        _id: 0
      },
      async function(err, data) {
        let listliked = getlistidliked(data.likedShops);

        await CollectionS.find({ _id: { $nin: listliked } }).toArray(function(
          err,
          data
        ) {
          let reponse;

          if (!err) {
            reponse = {
              succes: true,
              restaurant: data,
              error: null,
              msg: "Details of the user"
            };
            callback(reponse);
          } else {
            reponse = {
              succes: false,
              restaurant: null,
              error: err,
              msg: "error"
            };
            callback(reponse);
          }
        });
      }
    );
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
function getlistidliked(listShop) {
  let arrayid = [];
  listShop.forEach(shop => {
    arrayid.push(new ObjectId(shop.idShop));
  });
  return arrayid;
}
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
