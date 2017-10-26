var express = require('express');
var procedures = require('../procedures/purchases.proc');
var stripeSvc = require('../services/stripe.svc');

var router = express.Router();

router.post('/', function (req, res) {
    var p = req.body;
    var amount = Number(p.amount);
    stripeSvc.charge(p.token, amount)
        .then(function (charge) {
            procedures.create(charge.amount, charge.id)
        })










    procedures.create(p.price, p.stripetransactionid)
        .then(function (id) {
            res.status(201).send(id);
        }).catch(function (err) {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;   