var mongoose = require('mongoose');
var Person = mongoose.model('people');
module.exports ={
	index: function(req, res){
		Person.find({}, function(err, people){
			if(err){
				console.log(err);
				res.json(Person.errors);
			}
			else{
				console.log(people);
				res.json(people);
			}
			
		})
	},
	add: function(req, res){
		var newperson = new Person({name : req.params.name})
		newperson.save(function(err){
			if(err){
				console.log("Person not saved!")
				res.json(person.errors);
			}
			else{
				console.log(newperson)
				console.log("Person saved!")
				res.redirect('/');
			}
		})
	},
	remove: function(req, res){
		Person.remove({name: req.params.name}, function(err, people){
			if(err){
				console.log(err);
				res.json(person.errors)
			}
			else{
				console.log('Person deleted!')
				res.redirect('/')
			}
		})
	},
	showone: function(req, res){
		Person.findOne({name: req.params.name}, function(err, person){
			if(err){
				console.log(err);
				res.json(person.errors)
			}
			else{
				console.log('Showing one person!');
				res.json(person);

			}
		})
	}
}