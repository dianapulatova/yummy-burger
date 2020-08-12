require("dotenv").config();
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  //for heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //personal database
  connection = mysql.createConnection(process.env.DB_URL);
  // connection = mysql.createConnection({
  //   host: process.env.DB_HOST,
  //     port:process.env.DB_PORT,
  //     user:process.env.DB_USER,
  //     password:process.env.DB_PASSWORD,
  //     database:process.env.DB_DATABASE,
  // });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

// // Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Afruza2017",
//   database: "burgers_db",
// });

// // Make connection.
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;
