var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, function(err, data) {
  if (!err) {
    var lines = data.toString().split("\n").length - 1;
    console.log(lines);
  }

});
