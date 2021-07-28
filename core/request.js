/** 
 * Url module.
 * @module url 
 */
const url = require('url');
/** 
 * Querystring module.
 * @module querystring 
 */
const queryString = require('querystring');
/**
 * @module request/instance
 */

/** Class representing the request. */
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
     * Initialise and sets the request, then execute the callback function.
     * @param {string} req 
     * @param {callBack} callBack 
     */
    initialiseRequest(req, callBack) {
        let body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        });
        req.on('end', () => {
            /** Get request body to set parameters. */
            body = Buffer.concat(body).toString();
            const paramsName = queryString.parse(body);
            /** Get request headers to set parameters. */
            var queryObject = url.parse(req.url, true).query;
            this.controllerName = queryObject.controller;
            this.actionName = queryObject.action;
            this.params = paramsName;
            callBack();
        });
    }
}
