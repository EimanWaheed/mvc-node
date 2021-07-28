const request = require('/home/eiman.waheed/Desktop/mvc-node/core/request.js');
const appObject = require('/home/eiman.waheed/Desktop/mvc-node/public/app.js');
var url = require('url');
var fs = require('fs');
var http = require('http');

/** 
 * Creates local HTTP server and it is a single entry point.
 * @param {string} req
 * @param {string} res
 */
http.createServer(function (req, res) {

  /** Setting request instance. */
  console.log("singleton object printed");
  requestInstance = request.getInstance();
  requestInstance.initialiseRequest(req, () => {

    console.log(requestInstance);
    /** Running app object. */
    appObject.runApp();
    res.write('123'.toString());
    res.end();
  });


}).listen(3000);