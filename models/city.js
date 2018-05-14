var mongoose = require('mongoose');


var citySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

var City = module.exports = mongoose.model('City', citySchema)

module.exports.getCities = function(cb, limit){
    City.find(cb).limit(limit);
};

module.exports.addCity = function(city, cb){
    City.create(city, cb);
};


module.exports.removeCity = function(id,cb){
    var query = {_id: id};
    City.deleteOne(query,cb);
};