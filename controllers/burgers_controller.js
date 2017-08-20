var express = require("express");
var burger = require('../models/burger.js');

var router = express.Router();



router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var burgerName = req.body.burgerName;
  burger.insertOne(burgerName, 0, function(data) {
    
    burger.selectAll(function(data) {
    
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  	});
  });
});

router.post("/devour", function(req, res) {
  var burgerId = req.body.burger;
 console.log("here with id:" + burgerId)
  burger.updateOne(burgerId, 1, function(data) {
    
    burger.selectAll(function(data) {
    
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  	});
  });
});

module.exports = router;