
const url = require('url');
const querystring = require('querystring');
module.exports = class Request {

    static GetInstance() {
        if (!Request.instance) {
            Request.instance = new Request();
        }
        return Request.instance;
    }
    GetController() {
        return this.controllerName;
    }
    GetAction() {
        return this.actionName;
    }

    InitialiseRequest(req, CallBack) {
        let body = [];
        if (req.method == 'POST') {
            req.on('data', function (chunk) {
                body.push(chunk);
            });
            req.on('end', () => {
                //getting request body for setting parameters
                body = Buffer.concat(body).toString();
                const paramsName = querystring.parse(body);
                //getting headers
                var queryobj = url.parse(req.url, true).query;
                this.controllerName = queryobj.controller;
                this.actionName = queryobj.action;
                this.params = paramsName;
                CallBack();
            });
        }

    }
}
