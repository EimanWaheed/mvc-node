/** Import Request class for getting request instance. */
const request = require('/home/eiman.waheed/Desktop/mvc-node/core/request.js');
/** Import App function for running the dispatcher. */
const appObject = require('/home/eiman.waheed/Desktop/mvc-node/public/app.js');
/** 
 * Url module.
 * @module url
 */
var url = require('url');
/**
 * File system module.
 * @module fs
 */
var fs = require('fs');
/**
 * HTTP module.
 * @module http
 */
var http = require('http');

/** Creates HTTP local server. */
http.createServer(function (req, res) {

  /** Setting request instance. */
  console.log("singleton object printed");
  requestInstance = request.getInstance();
  requestInstance.initialiseRequest(req, () => {

    console.log(requestInstance);
    /** Running app object. */
    appObject.runApp();
    res.write('123');
    res.end();
  });
}).listen(3000);