const express = require("express");
const passport = require("passport");

const router = express.Router();

const userCRUD = require("../app_modules/user_CRUD");

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

// add user
router.post("/singup", function(req, res) {
  userCRUD.createUser(req.body, function(data) {
    res.send(JSON.stringify(data));
  });
});
//passport auth
router.post("/singin", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (info) {
      res.send(JSON.stringify({ err: info.message }));
    } else {
      res.send(JSON.stringify({ data: "connected" , user : user }));
    }
    // failureRedirect: '/auth/mail',
    // failureFlash: true,
    // successRedirect: '/'
  })(req, res, next);
});


/************************ FUNCTION IN SHOPS *************************/

//like a shop 
router.post('/like', function(req, res) {
	var iduser = req.query.iduser;
	var idshop = req.query.idshop;

 	userCRUD.likeShop(iduser,idshop, function(data) {
 		res.send(JSON.stringify(data)); 
 	});
 
});

//remove a liked shop 
router.delete('/removelike', function(req, res) {
	var iduser = req.query.iduser;
	var idshop = req.query.idshop;

 	userCRUD.removeShop(iduser,idshop, function(data) {
 		res.send(JSON.stringify(data)); 
 	});
 
});

//dislike a shop 
router.post('/dislike', function(req, res) {
	var iduser = req.query.iduser;
	var idshop = req.query.idshop;

 	userCRUD.dislikeShop(iduser,idshop, function(data) {
 		res.send(JSON.stringify(data)); 
 	});
 
});


// find unliked shops
router.get('/disliked', function(req, res) {
  var iduser = req.query.iduser;
  
 	userCRUD.findShopunliked(iduser, function(data) {
 		res.send(JSON.stringify(data)); 
 	});
 
});


// find liked shops
router.get('/liked', function(req, res) {
  var iduser = req.query.iduser;
  
 	userCRUD.findShopliked(iduser, function(data) {
 		res.send(JSON.stringify(data)); 
 	});
 
});



// router.get("/nearunliked", async (req, res) => {
//   // Si présent on prend la valeur du param, sinon 1
//   let coord = {
//     lng : req.query.lng  ,
//     lat : req.query.lat 
//   } ;
//   var iduser = req.query.iduser;
 
//   userCRUD.findShopunlikedNear(coord,iduser, function(data) {
//     res.send(JSON.stringify(data)); 
//   });
// });

// Get near shops not disliked, unliked
router.get("/near", async (req, res) => {
  // Si présent on prend la valeur du param, sinon 1
  let coord = {
    lng : req.query.lng  ,
    lat : req.query.lat 
  } ;
  var iduser = req.query.iduser;
 
  userCRUD.findShopsHome(coord,iduser, function(data) {
    var objdData = {
      msg: "shops pres recherchés avec succès",
      data: data
    };
    res.send(JSON.stringify(objdData));
  });
});


module.exports = router;
