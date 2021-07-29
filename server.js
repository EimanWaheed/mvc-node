require('./config');
const autoload=require(`${process.env.FILEPATH}/core/autoload.js`);
const http=autoload.autoload('http');
/** 
 * Creates local HTTP server and it is a single entry point.
 * @param {string} req
 * @param {string} res
 */
http.createServer(function (req, res) {
  
  /** Acquire modules. */
  const request = autoload.autoload('request');
  const appObject = autoload.autoload('appObject');
  const url = autoload.autoload('url');
  const fs = autoload.autoload('fs');

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

