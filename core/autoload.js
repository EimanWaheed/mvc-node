/**
 * Autoload function takes module name as an input, loads it and returns the object.
 * @param {string} moduleName 
 */
function autoload(moduleName) {
    const http = require('http');
    const url = require('url');
    const fs = require('fs');
    const queryString = require('querystring');
    const request = require(`${process.env.FILEPATH}/core/request.js`);
    const appObject = require(`${process.env.FILEPATH}/public/app.js`);
    const dispatcher = require(`${process.env.FILEPATH}/core/dispatcher.js`);
    const controller = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
    const modelObject = require(`${process.env.FILEPATH}/core/models/modelFactory.js`);
    autoloadObject = {
        "http": http,
        "url": url,
        "fs": fs,
        "querystring": queryString,
        "request": request,
        "appObject": appObject,
        "dispatcher": dispatcher,
        "controller": controller,
        "modelObject": modelObject
    }
    return autoloadObject[moduleName];
}
module.exports = {
    autoload
}
