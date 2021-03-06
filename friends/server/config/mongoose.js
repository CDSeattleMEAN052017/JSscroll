//changing the name of the DB and then nothing should change on this page

var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/meanfriends');
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});