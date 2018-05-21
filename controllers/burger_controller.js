var express = require ("express");
var router = express.Router()
var burger = require ("../models/burger.js");


router.get("/", (req, res) => {
burger.selectAll((data) => {
    var burger = {
        burgers: data
    };
    res.render("index", burger);
});
});

router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({id: result.insertId });
    });
});

router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: true
    }, condition, function(data){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;