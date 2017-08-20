var orm = require('../config/orm.js');

//inside burger.js, import orm.js into burger.js
//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.

var bg = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burgerName, devoured, cb) {
    orm.insertOne(burgerName, devoured, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, devoured, cb) {
    orm.updateOne(id, devoured, function(res) {
      cb(res);
    });
  }
};


module.exports = bg; 