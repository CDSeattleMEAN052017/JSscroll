var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})


// post route for adding a user
app.post('/results', function(req, res) {
 console.log("POST DATA \n\n", req.body);

 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('results' , {user: req.body});
})
// app.get('/results', function(req, res) {
//  res.render("results");
// })

// tell the express app to listen on port 8000

app.listen(8000, function() {
 console.log("listening on port 8000");
});