var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var responses = [];
var counter = 0;

return urls.forEach(getUrl)

function getUrl(url, i, list) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data){
      if (err) {
        return console.log(err.stack);
      }
      dataString = data.toString();
      if (dataString.length > 0) {
        //console.log(i);
        responses[i] = dataString;
        counter++;
      }
      if (counter == urls.length) return done()
    }));
  });
}
function done() {
	responses.forEach(function(element, index, list){
    console.log(element);
  });
}
