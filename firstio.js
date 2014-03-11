var fs = require('fs');
var buffer = fs.readFileSync('propendata.csv').toString();

var strings = buffer.split("\n");

console.log(strings.length);
