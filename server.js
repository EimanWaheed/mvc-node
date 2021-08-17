require('./config');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
//autoload.getFileName();
//autoload.getAllFiles(process.env.PWD);
const http = require('http');

/** 
 * Creates local HTTP server which is responsible for handling incoming request and it is a single entry point. 
 * The server is listening on the port number specified. As the request is received, it is directed to be set 
 * by the request initialiser method. This function uses the callback for synchronously setting the request, 
 * writes the response back and then invokes the RunApp method.
 * @param {string} req
 * @param {string} res
 */
let serverConnection = http.createServer(function (req, res) {
    //autoload.loadModulesFromDirectory(process.env.PWD).then(() => {
        const request = autoload.getFileName('request');
        const app = new (autoload.getFileName('app'));
        // console.log(app);
        const requestInstance = request.getInstance();
        requestInstance.initialiseRequest(req, () => {
            let response = app.runApp();
            res.writeHead(response.getStatusCode(), { 'Content-Type': response.getContentType() });
            res.write(response.getContent());
            res.end();
        });
   // })
})
serverConnection.listen(3000);
