const connection = require("./connection.js");

const orm = {
    selectAll: (table, callback) => {
        connection.query("SELECT * FROM ??", [table], (response) => {
            callback(data);
        });
    },
    insertOne: (table, col, val, callback) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [table, col, val], (response) => {
            callback(response);
        });
    },
    updateOne: (table, objColVals, condition, callback) => {
        connection.query("UPDATE ?? SET ? WHERE ?", [table, objColVals, condition], (response) => {
            callback(response);
        });
    },
};

module.exports = orm;