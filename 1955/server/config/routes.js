var mongoose = require('mongoose');
var Person = mongoose.model('people');
var people = require('../controllers/people.js');
module.exports = function(app){

	app.get('/', people.index);
	app.get('/new/:name', people.add);
	app.get('/remove/:name', people.remove);
	app.get('/:name', people.showone);

}