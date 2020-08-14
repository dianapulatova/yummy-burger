// require("dotenv").config();
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  //for heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //personal database
  // connection = mysql.createConnection(process.env.DB_URL);
  require("dotenv").config();
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE,
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

