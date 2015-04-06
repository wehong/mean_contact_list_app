var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
var bodyParser = require('body-parser');

//static means we are telling the server to look for static files
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList', function(req, res) {
  console.log("GET Request Received");
  db.contactList.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactList', function(req, res) {
  console.log(req.body);
  db.contactList.insert(req.body, function(err, docs) {
    res.json(docs);
  });
})

app.listen(3000);
console.log("Server running on port 3000");
