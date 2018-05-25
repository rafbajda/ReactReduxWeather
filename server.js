var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

City = require('./models/city');

var favourites = [
    {id:0, name: 'Berlin'},
    {id:1, name: 'Bialystok'},
    {id:2, name: 'Warszawa'}
];

mongoose.connect('mongodb+srv://rafbajda:Familiada123@rbcluster-u6ftw.mongodb.net/ReactWeather?retryWrites=true');
var db = mongoose.connection;

app.get('/api/cities', (req,res) => {

    res.json(favourites);

});

app.post('/api/cities', function(req,res){
    var id1 = req.body.id;
    var name1 = req.body.name;
    var obj = {id:id1, name:name1}

    favourites.push(obj);
    console.log(favourites);
    res.json(favourites);

});

app.delete('/api/cities/:_id', function(req,res){
    var id = req.params._id;
    var removeIndex = favourites.map(function(item) { return item.name; }).indexOf(id);
    if(removeIndex!=-1)favourites.splice(removeIndex,1);
    console.log(favourites);
    res.json(favourites);

});


// app.get('/api/cities', function(req,res){

//     City.getCities(function(err, cities){
//         if(err){
//             throw err;
//         }
//         res.json(cities);
//     })

// })

// app.post('/api/cities', function(req,res){
//     var city = req.body;
//     City.addCity(city, function(err, city){
//         if(err){
//             throw err;
//         }
//         res.json(city);
//     })
// })

// app.delete('/api/cities/:_id', function(req,res){
//     var id = req.params._id;
//     console.log(req.params._id);
//     City.removeCity(id, function(err, city){
//         if(err){
//             throw err;
//         }
//         res.json(city);
//     })
// })

app.listen(5000);
console.log('running on port 5000...');