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
  const app = autoload('appObject');

  /** Setting request instance. */
  requestInstance = request.getInstance();
  requestInstance.initialiseRequest(req, () => {
    
    /** Running app object. */
    app.runApp();
    res.write('123'.toString());
    res.end();

  });

}).listen(3000);

