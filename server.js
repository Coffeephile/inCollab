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

app.post('/api/projects', function(req, res) {

  var user = req;

  console.log(req);

  ProjectModel.update({'items.ident': user.ident}, 
    { $set: {'items.$.userslist': user.userslist}}, 

    function(err) {

    if (err)
      res.send(err);
  });
});

app.post('/api/users', function(req, res) {

  var user = req;

  console.log(req);

  ProjectModel.update({'items.ident': user.ident}, 
    { $set: {'items.$.userslist': user.userslist}}, 

    function(err) {

    if (err)
      res.send(err);
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

var testUser1 = new UserModel({firstname: "Dariusz", lastname: "Kwiatkowski", position: "Programista" });
testUser1.save(function(err, testUser1) {
  if (err) return console.error(err);
  console.dir(testUser1);
});	

var testUser2 = new UserModel({firstname: "Marian", lastname: "Teściński", position: "Metalurg" });
testUser2.save(function(err, testUser2) {
  if (err) return console.error(err);
  console.dir(testUser2);
});

var testUser3 = new UserModel({firstname: "Hieronim", lastname: "Bojczy", position: "Inżynier produkcji" });
testUser3.save(function(err, testUser3) {
  if (err) return console.error(err);
  console.dir(testUser3);
});

var testUser4 = new UserModel({firstname: "Tadeusz", lastname: "Nowak", position: "Specjalista CAD" });
testUser4.save(function(err, testUser4) {
  if (err) return console.error(err);
  console.dir(testUser4);
});

ProjectModel.remove(function(err, p){
  if(err){ 
      throw err;
  } else{
      console.log('No Of Documents deleted:' + p);
  }
});

var testProject1 = new ProjectModel({
  name: 'Stalowy Kubek'
, users: ''
, ident: 'sk01'
, completion: '5'
});

testProject1.save(function(err, testProject1) {
  if (err) return console.error(err);
  console.dir(testProject1);
});	