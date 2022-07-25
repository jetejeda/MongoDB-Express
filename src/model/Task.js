const { default: mongoose } = require('mongoose');

module.exports = function(){
    var Schema = require('mongoose').Schema;

    var task = Schema({
        Title: String,
        Description: String,
        Status: Boolean,
    });

    return mongoose.model('Task', task);
};