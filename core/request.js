/** Class representing the request, for the purpose of setting the request object fetched from client.
This class is responsible for parsing the URL and setting the parameters of controller, action and form data. 
The instance of this class is made singleton using Singleton Design Pattern. */
module.exports = class Request {

    /**
     * Get the singleton instance of the Request class.
     * @return {string} The Request instance.
     */
    static getInstance() {
        if (!Request.instance) {
            Request.instance = new Request();
        }
        return Request.instance;
    }

    /**
     * Get the controller name.
     * @return {string} The controller name.
     */
    getController() {
        return this.controllerName;
    }

    /**
     * Get the action name.
     * @return {string} The action name.
     */
    getAction() {
        return this.actionName;
    }

    /**
    * Get the params object.
    * @return {object} The params object.
    */
    getParams() {
        return this.params;
    }

    /**
     * Initialise and sets the request, then execute the callback function.
     * @param {string} req 
     * @param {callBack} callBack 
     */
    initialiseRequest(req, callBack) {

        /** Acquiring the modules. */
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const url = require('url');
        const queryString = require('querystring');

        let body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        });
        req.on('end', () => {
            /** Get request body to set parameters. */
            body = Buffer.concat(body).toString();
            const paramsName = queryString.parse(body);
            /** Get request headers to set parameters. */
            let queryObject = url.parse(req.url, true).query;
            this.controllerName = queryObject.controller;
            this.actionName = queryObject.action;
            this.params = paramsName;
            callBack();
        });
    }
}
