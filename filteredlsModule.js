var fs = require('fs');
var path = require('path');

module.exports = function(pathName, pathExt, callback) {
  pathExt = '.' + pathExt;
  var filteredFiles = [];
  fs.readdir(pathName, function(err, list) {
    if (err) {
      return callback(err)
    }
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == pathExt) {
        filteredFiles.push(list[i]);
      }
    }
    callback(null, filteredFiles);
  });
}


