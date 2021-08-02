require('./config');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const http = require('http');
const url = require('url');
const fs = require('fs');

/** 
 * Creates local HTTP server and it is a single entry point.
 * @param {string} req
 * @param {string} res
 */
http.createServer(function (req, res) {

  /** Acquire modules. */
  const request = autoload('request');
 // const response = autoload('response');
  const app = autoload('app');

  /** Setting request instance. */
  requestInstance = request.getInstance();
  requestInstance.initialiseRequest(req, () => {

    console.log(requestInstance);
    /** Running app object. */
    let response = app.runApp();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(response.getContent());
    res.end();
  });

}).listen(3000);

