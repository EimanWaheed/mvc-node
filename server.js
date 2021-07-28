const pathfile = require('./config');
const request = require(`${process.env.FILEPATH}/core/request.js`);
const appObject = require(`${process.env.FILEPATH}/public/app.js`);
//const request = require('/home/eiman.waheed/Desktop/mvc-node/core/request.js');
let url = require('url');
let fs = require('fs');
let http = require('http');
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
    //res.write('123'.toString());
    //res.end();
  });
  
}).listen(3000);

