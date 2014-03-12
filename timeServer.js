var net = require('net');
var strftime = require('strftime');

var listenPort = process.argv[2];

var server = net.createServer(function(socket){
  var date = new Date();
  var dateString = strftime('%Y-%m-%d %H:%M', date);
  socket.end(dateString);
});

server.listen(listenPort);
