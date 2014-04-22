// modules =================================================
var express = require('express');
var app     = express();

var mongoose= require('mongoose');
var database = require('./config/db');

var port = process.env.PORT || 3333; 

global.db = mongoose.createConnection(database.url);

app.configure(function() {

	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// models =================================================
var UserModel = require('./app/models/user');
var ProjectModel = require('./app/models/project');	

// server routes ==========================================
app.get('/api/test', function(req, res) {

	res.json({ message: 'REST working' });	
});

app.get('/api/users', function(req, res) {

	UserModel.find(function(err, users) {

		if (err)
			res.send(err);

		res.json(users);
	});
});

app.get('/api/projects', function(req, res) {

	ProjectModel.find(function(err, projects) {

		if (err)
			res.send(err);

		res.json(projects);
	});
});

// frontend routes ====================================
app.get('*', function(req, res) {

	res.sendfile('./public/index.html');
});

// start app ===============================================
app.listen(port);	
console.log('Starting InCollab Node.js app on port ' + port); 		
exports = module.exports = app; 	

// !test data setup ===============================================
UserModel.remove(function(err, p){
    if(err){ 
        throw err;
    } else{
        console.log('No Of Documents deleted:' + p);
    }
});

var testUser1 = new UserModel({
  firstname: 'Adam'
, lastname: 'Teściński'
});

testUser1.save(function(err, testUser1) {
  if (err) return console.error(err);
  console.dir(testUser1);
});	

ProjectModel.remove(function(err, p){
    if(err){ 
        throw err;
    } else{
        console.log('No Of Documents deleted:' + p);
    }
});

var testProject1 = new ProjectModel({
  name: 'Kubek stalowy'
, completion: 'None'
});

testProject1.save(function(err, testProject1) {
  if (err) return console.error(err);
  console.dir(testProject1);
});	