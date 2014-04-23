
var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var UserSchema = new Schema({  
 
    firstname: { type: String },
    lastname: { type: String },
    position: { type: String } 
});

// methods ======================
UserSchema.methods.example = function(password) {
    return 0;
};

// export ======================
module.exports = db.model('User', UserSchema);
