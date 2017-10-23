var path = require('path');
var express = require('express');
var bodyParser =require('body-parser');
var prerender = require('prerender-node');

prerender.set('prerenderToken', process.env.PRERENDER_TOKEN);
var app = express();

var clientPath = path.join(__dirname, "../client");

app.use(prerender);
app.use(express.static(clientPath));
app.listen(process.env.PORT || 3000);

