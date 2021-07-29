const http = require('http');
/** 
 * Creates local HTTP server and it is a single entry point.
 * @param {string} req
 * @param {string} res
 */
http.createServer(function (req, res) {

  require('./config');
  const request = require(`${process.env.FILEPATH}/core/request.js`);
  const appObject = require(`${process.env.FILEPATH}/public/app.js`);
  const url = require('url');
  const fs = require('fs');

  /** Setting request instance. */
  requestInstance = request.getInstance();
  requestInstance.initialiseRequest(req, () => {

    console.log(requestInstance);
    /** Running app object. */
    const appStart = new appObject();
    appStart.runApp();

    /** Fetching the form data. */
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

}).listen(3000);

