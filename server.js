
var http = require('http');
const Request=require('/home/eiman.waheed/Desktop/mvc-node/core/request.js');
var url=require('url');
const appObj=require('/home/eiman.waheed/Desktop/mvc-node/public/app.js');
http.createServer(function (req, res) {
  
  if(req.url!="/favicon.ico"){
  //getting request object
  var queryobj= url.parse(req.url, true).query;
  console.log(queryobj.controller);
  console.log(queryobj.action);

  //setting to the request class
  mySingleton=Request.getInstance();
  mySingleton.setController=queryobj.controller;
  mySingleton.setAction=queryobj.action;
  console.log(mySingleton);
  //module.exports=mySingleton;
  appObj.runApp();
  //writing to the screen
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
  }
}).listen(8080);


