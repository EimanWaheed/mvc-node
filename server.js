///home/eiman.waheed/Desktop/mvc-node/app/views/student
var fs = require('fs');

var http = require('http');
const Request = require('/home/eiman.waheed/Desktop/mvc-node/core/request.js');
var url = require('url');
const appObj = require('/home/eiman.waheed/Desktop/mvc-node/public/app.js');
http.createServer(function (req, res) {

  //setting to the request class
  console.log("singleton object printed");
  requestInstance = Request.GetInstance();
  requestInstance.InitialiseRequest(req, () => {

    console.log(requestInstance);
    //calling app file function 
    appObj.runApp();

    //reading file
    fs.readFile("/home/eiman.waheed/Desktop/mvc-node/app/views/student/create.html", function (error, pgResp) {
      if (error) {
        res.writeHead(404);
        res.write('Contents you are looking are Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(pgResp);
      }

      res.end();

    });

  });

}).listen(8080);