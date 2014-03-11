var filteredlsModule = require('./filteredlsModule.js');

var pathName = process.argv[2];
var pathExt = process.argv[3];

filteredlsModule(pathName, pathExt, function(err, filteredFiles) {
  filteredFiles.forEach(function(element){
    console.log(element);
  });
});
