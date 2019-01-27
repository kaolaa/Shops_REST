var ObjectId = require("mongodb").ObjectID;
const MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

// Database Name
const dbName = "shops";
const url = "mongodb://kaolaa:kaola77@ds141924.mlab.com:41924/shops";

//count shops  a string or without
exports.countShops = async function(name, callback) {
  MongoClient.connect(url)
    .then(client => {
      const db = client.db(dbName);
      if (name == "") {
        db.collection("shops")
          .count()
          .then(rep => callback(rep));
      } else {
        let query = {
          name: { $regex: ".*" + name + ".*", $options: "i" }
        };
        db.collection
          .find(query)
          .count()
          .then(rep => callback(rep));
      }
    })
    .catch(err => {
      throw err;
    });
};

//finding shops including a string or without
//fixing a number of shops per page
exports.findShops = async function(page, pagesize, name, callback) {
  MongoClient.connect(url)
    .then(client => {
      const db = client.db(dbName);
      if (name == "") {
        db.collection("shops")
          .find()
          .skip(page * pagesize)
          .limit(pagesize)
          .toArray()
          .then(Collection => {
            db.collection("shops")
              .count()
              .then(rep => callback(Collection, rep));
          });
      } else {
        let query = {
          name: { $regex: ".*" + name + ".*", $options: "i" }
        };
        db.collection("shops")
          .find(query)
          .skip(page * pagesize)
          .limit(pagesize)
          .toArray()
          .then(arr => {
            Collection.find(query)
              .count()
              .then(rep => callback(arr, rep));
          });
      }
    })
    .catch(err => {
      throw err;
    });
};

//finding shops by id
exports.findShopById = async function(id, callback) {
  MongoClient.connect(url).then(async client => {
    const db = client.db(dbName);
    await db
      .collection("shops")
      .findOne({ _id: ObjectId(id) })
      .then(data => {
        callback(data);
      })
      .catch(err => {
        throw err;
      });
  });
};
//finding shops near the coord
// withing 40 km
exports.findShopsNear = async function(coord, callback) {
  MongoClient.connect(url).then(client => {
    const db = client.db(dbName);
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
        }
      ])
      .get((err, data) => {
        if (data) {
          callback(data);
        } else {
          callback(err);
        }
      });
  });
};
exports.createShop = async function(formData, callback) {
  MongoClient.connect(url).then(async client => {
    const db = client.db(dbName);
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
    await db
      .collection("shops")
      .insert(toInsert)
      .then(insertedId => {
        callback(insertedId.ops[0]._id);
      })
      .catch(err => {
        throw err;
      });
  });
};

module.exports = exports;
