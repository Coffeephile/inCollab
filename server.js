// modules =================================================
var express = require('express');
var app     = express();

var mongoose= require('mongoose');
var db = require('./config/db');

var port = process.env.PORT || 80; 
mongoose.connect(db.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app); //pass app to routees

// start app ===============================================
app.listen(port);	
console.log('Starting InCollab Node.js app on port ' + port); 		
exports = module.exports = app; 			