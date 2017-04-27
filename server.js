// server.js

// init project
var express = require('express');
var app = express();

app.use(express.static('public'));

// index page is documentation for the button script
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// life is a highway
app.get('/backup', function(req, res) {
  res.sendFile(__dirname + '/public/backup.json');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
