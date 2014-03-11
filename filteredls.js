var fs = require('fs');
var path = require('path');

var pathName = process.argv[2];
var pathExt = '.' + process.argv[3];

fs.readdir(pathName, function(err, list) {
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == pathExt) {
      console.log(list[i])
    }
  }
});
