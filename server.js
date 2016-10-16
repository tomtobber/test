var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.csv");
var request = http.get("http://financials.morningstar.com/ajax/exportKR2CSV.html?t=FB", function(response) {
  response.pipe(file);
  file.on('finish', function() {
      //file.close(cb);  // close() is async, call cb after close completes.
    });

 var stats = fs.statSync("file.csv")
 var fileSizeInBytes = stats["size"]

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('filesize: '+fileSizeInBytes+' \n');
    res.end('<h1>Hello Code and Azure Web Appssss!</h1>');
}).listen(process.env.PORT)});