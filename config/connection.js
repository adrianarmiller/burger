var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3000,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err){
        console.error("Failed to connect");
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;