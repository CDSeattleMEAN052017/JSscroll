var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.listen(8000, function() {
    console.log("listening on port 8000");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mboard');

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength :4},
	message: {type: String, required: true},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
 }, {timestamps: true});

var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true}, 
	comment: {type: String, required: true},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps : true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


app.get('/', function(req, res){
	var msg = Message.find({}).populate('_comments').exec(function(error, message){
		console.log(msg)

		res.render('index', {message:message})
	})
		
});
app.post('/addmessage', function(req, res){
	var message = new Message({name:req.body.name, message: req.body.message});
	
	message.save(function(err){
		if(err){
			console.log(err)
			res.render('index.ejs',{errors: message.errors});
		}
		else{
			console.log("added!")
			res.redirect('/')
		}
	});
});

app.post('/addcomment/:id', function(req, res){
	console.log(req.params.id)
	Message.find({_id: req.params.id}, function(err, message){
		var comment = new Comment({name : req.body.name, comment: req.body.comment});
		comment._message = message._id;
		console.log(req.params.id)
		Message.update({_id: req.params.id}, {$push :{"_comments": comment}}, function (err){

		});
		comment.save(function(err){
			if(err)
				{
				console.log('Comment error')
				res.render('index.ejs', {errors : comment.errors})
				}
			else
			{
				console.log('comment saved!')
				res.redirect('/')
			}
			
			
			});
		});
	});



