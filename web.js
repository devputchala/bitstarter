var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(20);
  buffer = fs.readFileSync('index.html');
  response.send(buffer.toString("utf-8", 0, Buffer.byteLength(buffer)));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
