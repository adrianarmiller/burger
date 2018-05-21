var orm = require("../config/orm.js");

let burger = {
    selectAll: (callback) => {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    insertOne: (col, val, callback) => {
        orm.insertOne("burgers", col, val, (res) => {
            callback(res)
        });
    },
    updateOne: (id, callback) => {
        orm.updateOne("burgers", id, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;

const task = {

    insert: (values, cb) => {
        orm.insertOne("tasks", ["text", "state"], values, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne("tasks", objColVals, condition, (res) => {
            cb(res);
        });
    },
};
