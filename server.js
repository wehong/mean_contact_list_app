var express = require('express');
var app = express();

//static means we are telling the server to look for static files
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running on port 3000");
