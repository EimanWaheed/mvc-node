/** Acquiring modules. */
require('./config');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const http = require('http');

/** 
 * Creates local HTTP server which is responsible for handling incoming request and it is a single entry point. 
 * The server is listening on the port number specified. As the request is received, it is directed to be set 
 * by the request initialiser method. This function uses the callback for synchronously setting the request, 
 * writes the response back and then invokes the RunApp method.
 * @param {string} req
 * @param {string} res
 */
http.createServer(function (req, res) {
  const request = autoload('request');
  const app = new (autoload('app'));
  const requestInstance = request.getInstance();
  requestInstance.initialiseRequest(req, () => {
    let response = app.runApp();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(response.getContent());
    res.end();
  });

}).listen(3000);

