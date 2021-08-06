/** Acquiring the modules. */
const url = require('url');
const queryString = require('querystring');

/** Class representing the request which has the properties of controllerName, actionName and params,
 * for the purpose of initialising and setting the request object fetched from client. This class is 
 * responsible for parsing the URL and setting the properties of the request instance. Since, no 
 * multiple incoming requests can be dealt after receiving the request so the instance of this class 
 * is made singleton using Singleton Design Pattern. 
 */

module.exports = class Request {

    /**
     * Get the singleton instance of the Request class.
     * @returns {Object} The Request instance.
     */
    static getInstance() {
        if (!Request.instance) {
            Request.instance = new Request();
        }
        return Request.instance;
    }

    /**
     * Get the controller name.
     * @returns {string} The controller name.
     */
    getController() {
        return this.controllerName;
    }

    /**
     * Get the action name.
     * @returns {string} The action name.
     */
    getAction() {
        return this.actionName;
    }

    /**
    * Get the params object.
    * @returns {Object} The params object.
    */
    getParams() {
        return this.params;
    }

    /**
     * Initialises and sets the request. It receives the request as an argument, parses the URL for the purpose 
     * of retrieving the parameters from the body of URL, assings the parameters to the class properties and then
     * executes the callback function.
     * @param {string} req 
     * @param {callBack} callBack 
     */
    initialiseRequest(req, callBack) {

        let body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        });
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            const paramsName = queryString.parse(body);
            let queryObject = url.parse(req.url, true).query;
            this.controllerName = queryObject.controller;
            this.actionName = queryObject.action;
            this.params = paramsName;
            callBack();
        });
    }
}
