var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var prerender = require('prerender-node');
var api = require('./api');
var routing = require('./middleware/routing.mw');

var clientPath = path.join(__dirname, "../client");

prerender.set('prerenderToken', process.env.PRERENDER_TOKEN);
var app = express();



app.use(prerender);
app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use('/api', api);
app.get('*', routing.stateRouting);

// stripe attempt//
var stripe = require('stripe')('sk_testSECRET_KEY');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/success', function(req, res) {
  res.send('order completed');
});

app.post('/charge', function(req, res) {
    var stripeToken = req.body.stripeToken;
    var amount = req.body.amount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send(500, err);
        } else {
            res.send('total charged is:' + charge);
        }
    });
});

app.use(express.static(__dirname));
//stripe attempt//

app.listen(process.env.PORT || 3000);
