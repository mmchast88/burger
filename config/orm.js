var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(burgerName, devoured, cb) {

    var queryString = "INSERT INTO burgers (burger_name, devoured, devouredDate) VALUES (?, ?, CURRENT_TIMESTAMP);";
    console.log(queryString);
    connection.query(queryString, [burgerName, devoured], function(err, result) {
      console.log(result);
      cb(result);
    });
    
  },
  updateOne: function(id, devoured, cb) {
    var queryString = "UPDATE burgers set devoured = ? WHERE id = ?";
    connection.query(queryString, [devoured, id], function(err, result) {
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;