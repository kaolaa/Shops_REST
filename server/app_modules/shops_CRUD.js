var mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectID;
var assert = require("assert");

// Database Name
const dbName = "shops";

//count shops  a string or without
exports.countShops = async function(name, callback) {
  try {
    const Collection = await GetCollection("shops");
    if (name == "") {
      await Collection.count().then(rep => callback(rep));
    } else {
      let query = {
        name: { $regex: ".*" + name + ".*", $options: "i" }
      };
      await Collection.find(query).count().then(rep => callback(rep));
    }
  } catch (err) {
    reponse = {
      error: err.message,
      msg: "erreur lors du find"
    };
    callback(reponse);
  }
};

//finding shops including a string or without
//fixing a number of shops per page 
exports.findShops = async function(page, pagesize, name, callback) {
  const Collection = await GetCollection("shops");

  if (name == "") {
    await Collection.find()
      .skip(page * pagesize)
      .limit(pagesize)
      .toArray()
      .then(arr => {
        Collection.count().then(rep => callback(arr, rep));
      });
  } else {
    let query = {
      name: { $regex: ".*" + name + ".*", $options: "i" }
    };
    Collection.find(query)
      .skip(page * pagesize)
      .limit(pagesize)
      .toArray()
      .then(arr => {
        Collection.find(query)
          .count()
          .then(rep => callback(arr, rep));
      });
  }
};

//finding shops near the coord
exports.findShopsNear = async function(coord, callback) {
  let reponse;
  const Collection = await GetCollection("shops");
  await Collection.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(coord.lng), parseFloat(coord.lat)]
        },
        spherical: true,

        distanceField: "dist",
        maxDistance: 100000
      }
    }
  ]).get((err, data) => {
    if (!err) {
      reponse = {
        succes: true,
        shops: data,
        error: null,
        msg: "Details du magasin pres envoyés"
      };
      callback(reponse);
    } else {
      reponse = {
        succes: false,
        shops: null,
        error: err,
        msg: "erreur lors du find"
      };
      callback(reponse);
    }
  });
};

//finding shops by id
exports.findShopById = async function(id, callback) {
  try {
    const Collection = await GetCollection("shops");
    let myquery = { _id: ObjectId(id) };

    await Collection.findOne(myquery, function(err, data) {
      let reponse;
      //if the find dosen't return a results, it's not an err, so we need to test on data availability
      if (data) {
        reponse = {
          shops: data,
          error: null,
          msg: "Details du magasin envoyés"
        };
      } else {
        reponse = {
          error: err,
          msg: "aucun element trouver"
        };
      }
      callback(reponse);
    });
  } catch (err) {
    reponse = {
      error: err.message,
      msg: "erreur lors du find"
    };
    callback(reponse);
  }
};

exports.createShop = async function(formData, callback) {
  const Collection = await GetCollection("shops");
  if (Collection) {
    let toInsert = {
      name: formData.nom,
      email: formData.email,
      city: formData.city,
      location: {
        type: formData.type,
        coordinates: [formData.x, formData.y]
      }
    };
    console.dir(JSON.stringify(toInsert));
    await Collection.insert(toInsert, function(err, insertedId) {
      let reponse;

      console.log("++++" + insertedId);

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
  } else {
    let reponse = (reponse = {
      succes: false,
      error: err,
      msg: "Problème lors de l'insertion, erreur de connexion."
    });
    callback(reponse);
  }
};

exports.updateShop = async function(id, formData, callback) {
  const Collection = await GetCollection("shops");
  if (Collection) {
    let myquery = { _id: ObjectId(id) };
    let newvalues = {
      name: formData.nom,
      email: formData.email,
      city: formData.city,
      location: {
        type: formData.type,
        coordinates: [formData.x, formData.y]
      }
    };

    db.collection("shops").replaceOne(myquery, newvalues, function(
      err,
      result
    ) {
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
    });
  } else {
    let reponse = (reponse = {
      succes: false,
      error: err,
      msg: "Problème lors de la modification, erreur de connexion."
    });
    callback(reponse);
  }
};

exports.deleteShop = async function(id, callback) {
  const Collection = await GetCollection("shops");
  if (Collection) {
    let myquery = { _id: ObjectId(id) };

    db.collection("shops").deleteOne(myquery, function(err, result) {
      if (!err) {
        reponse = {
          succes: true,
          result: result,
          error: null,
          msg: "Suppression réussie " + result
        };
      } else {
        reponse = {
          succes: false,
          error: err,
          msg: "Problème à la suppression"
        };
      }
      callback(reponse);
    });
  } else {
    let reponse = (reponse = {
      succes: false,
      error: err,
      msg: "Problème lors de la suppression, erreur de connexion."
    });
    callback(reponse);
  }
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
