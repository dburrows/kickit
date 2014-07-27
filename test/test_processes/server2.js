var express = require('express');
var app = express();
var port = 1338;

app.get('/', function(req,res) {
  res.send(process.env.TESTVAR);
});

process.stdin.on( 'data', function( data ){
  console.log(data.toString()); 
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

