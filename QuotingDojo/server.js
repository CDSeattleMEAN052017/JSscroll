var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting');
var UserSchema = new mongoose.Schema({
	name : {type : String, required :true, minlength : 2}, 
	quote : {type : String, required : true, minlength : 2},
}, {timestamps: true });

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.listen(8000, function() {
    console.log("listening on port 8000");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
	app.set('views', path.join(__dirname, './views'));
	app.set('view engine', 'ejs');

app.get('/', function (req, res){
	res.render('index')

})
app.get('/show', function(req, res){
	
		
	User.find({}, [], {sort: {createdAt: -1}}, function(err, users) {
		if(err){console.log(err);}
	res.render('show', {users:users})
	});
	
});
	

app.post('/quotes', function (req, res){
	var user = new User({name: req.body.name, quote: req.body.quote});
	user.save(function(err){
		if(err){
			res.render('index', {title:'You have errors!', errors: user.errors})
		}
		else{
			res.redirect('/show')
		}
	})
})