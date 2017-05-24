//express
var express = require('express');
var app = express();

//bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

//static files
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(express.static(path.join(__dirname, "./client/node_modules")));

//mongoose
require('./server/config/mongoose.js');
var mongoose = require('mongoose');

//routes
var routes_setter = require('./server/config/routes.js')
routes_setter(app);

//listen
app.listen(8000, function() {
    console.log("listening on port 8000");
})