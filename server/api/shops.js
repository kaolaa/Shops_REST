const express = require("express");
const router = express.Router();

const shopCRUD = require("../app_modules/shops_CRUD");

//test connection
router.get("/connection", function(req, res) {
  mongoDBModule.connexionMongo(function(err, db) {
    let reponse;

    if (err) {
      console.log("connection error");
      reponse = {
        msg: "Connection error err=" + err
      };
    } else {
      reponse = {
        msg: "All is good, connection is here :)"
      };
    }
    res.send(JSON.stringify(reponse));
  });
});

// Get shops
router.get("/", async (req, res) => {
  // Si présent on prend la valeur du param, sinon 1
  let page = parseInt(req.query.page || 1);
  // idem si present on prend la valeur, sinon 10
  let pagesize = parseInt(req.query.pagesize || 12);

  let name = req.query.name || "";

  shopCRUD.findShops(page, pagesize, name, function(data, count) {
    var objdData = {
      msg: "shops recherchés avec succès",
      data: data,
      count: count
    };
    res.send(JSON.stringify(objdData));
  });
});

//  get shops per id 
router.get("/id/:id", function(req, res) {
	var id = req.params.id;

 	shopCRUD.findShopById(id, function(data) {
 		res.send(JSON.stringify(data)); 
 	});
 
});

// Get near shops
router.get("/near", async (req, res) => {
  // Si présent on prend la valeur du param, sinon 1
  let coord = {
    lng : req.query.lng  ,
    lat : req.query.lat 
  } ;
  shopCRUD.findShopsNear(coord,  function(data) {
    var objdData = {
      msg: "shops pres recherchés avec succès",
      data: data
    };
    res.send(JSON.stringify(objdData));
  });


});
// Get number of shops
router.get("/count", async (req, res) => {
  let name = req.query.name || "";

  shopCRUD.countShops(name, function(data) {
    var objdData = {
      msg: "shops count",
      data: data
    };
    res.send(JSON.stringify(objdData));
  });
  // const posts = await loadShopsCollection();
  // res.send(await posts.find({}).toArray());
});
// // Add shops
// router.post("/", async (req, res) => {
//   const posts = await loadShopsCollection();
//   await posts.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   });
//   res.status(201).send();
// });

// // Delete shops
// router.delete("/:id", async (req, res) => {
//   const posts = await loadShopsCollection();
//   await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
//   res.status(200).send();
// });






// async function loadShopsCollection() {
//   const client = await mongodb.MongoClient.connect(
//     "mongodb://kaolaa:kaola77@ds141924.mlab.com:41924/shops",
//     {
//       useNewUrlParser: true
//     }
//   );

//   return client.db("shops").collection("shops");
// }
module.exports = router;
