'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var bikes = [
  {id: 1, name: 'Lapierre', price: '2499', country: 'FR', },
  {id: 2, name: 'Specialized', price: '2389', country: 'US'},
  {id: 3, name: 'Scott', price: '1999', country: 'US'},
  {id: 4, name: 'Cannondale', price: '3999', country: 'US'}
];

app.get('/', function (req, res) {
  res.send('Welcome to the bikes express challenge, check the README.md for instructions!');
});
//Challenge 2
app.get('/bikes/:country', function(req, res) {
  var tab =[];
  for (var i = 0; i< bikes.length; i++){
    if(bikes[i].country === req.params.country){
      tab.push(bikes[i]);
    }
  }
  return res.status(200).json(tab);
});
//Challenge 1
app.get('/bikes/select/:id', function(req, res){
  for (var i = 0; i< bikes.length; i++){
    if(bikes[i].id == req.params.id){
      var bike = bikes[i];
      return res.status(200).json(bike);
    }
  }
  return res.status(404).send('Not found');
});
//Challenge 3
app.delete('/bikes/delete/:id', function(req, res){
  for (var i = 0; i< bikes.length; i++){
    if(bikes[i].id == req.params.id){
      bikes.splice(i ,1);
      return res.status(200).json(bikes);
    }
  }
  return res.status(400).json(false);
});
//Challenge 4
app.put('/bikes/new', function(req, res) {
  var newBike = {
    id : req.body.id,
    name : req.body.name,
    price : req.body.price,
    country : req.body.country
  };
  bikes.push(newBike);
  return res.status(201).json(bikes);
});
//Challenge 5
app.get ('/bikes', function(req, res) {
  for (var i = 0;i<bikes.length;i++)
  {
    bikes[i].price = bikes[i].price*1.14;
  }
return res.status(200).json(bikes);
});

app.listen(3000, function () {
  console.log('Express challenge app listening on port 3000, check http://localhost:3000');
});
