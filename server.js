var express = require('express');
var app = express();

//static means we are telling the server to look for static files
app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req, res) {
  console.log("GET Request Received");
  person1 = {
    name: "Wentao",
    email: "hongwentao0705@gmail.com",
    number: "1234567890"
  }

  person2 = {
    name: "AAA",
    email: "aaa@gmail.com",
    number: "1111111111"
  }

  person3 = {
    name: "BBB",
    email: "bbb@gmail.com",
    number: "2222222222"
  }
  var contactList = [person1, person2, person3];
  res.json(contactList);
})

app.listen(3000);
console.log("Server running on port 3000");
