// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var projectSchema = mongoose.Schema({

    local            : {
        id        : String
    }
});

// methods ======================

module.exports = mongoose.model('Project', projectSchema);
