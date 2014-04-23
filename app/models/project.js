
var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var ProjectSchema = mongoose.Schema({

    name: { type: String },
    ident: { type: String },
    userslist: { type : Array , "default" : [] },
    completion: { type: String }
});

// methods ======================
ProjectSchema.methods.example = function(name) {
    return 0;
};

// export ======================
module.exports = db.model('Project', ProjectSchema);
