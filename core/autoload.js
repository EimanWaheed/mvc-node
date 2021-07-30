/**
 * Autoload function takes module name as an input, loads it and returns the object.
 * @param {string} moduleName 
 */
function autoload(moduleName) {


    const request = require(`${process.env.FILEPATH}/core/request.js`);
    const appObject = require(`${process.env.FILEPATH}/public/app.js`);
    const appStart = new appObject();
    const dispatcher = require(`${process.env.FILEPATH}/core/dispatcher.js`);
    const dispatchReq = new dispatcher();
    const controller = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
    const modelObject = require(`${process.env.FILEPATH}/core/models/modelFactory.js`);
    const RestController = require(`${process.env.FILEPATH}/core/controllers/restController.js`);
    const crudModel = require(`${process.env.FILEPATH}/core/models/crudModel.js`);
    const viewManager = require(`${process.env.FILEPATH}/core/views/viewManager.js`);
    const view_manager = new viewManager();
    const response = require(`${process.env.FILEPATH}/core/response.js`);
    autoloadObject = {
        "request": request,
        "appObject": appStart,
        "dispatcher": dispatchReq,
        "controller": controller,
        "modelObject": modelObject,
        "RestController": RestController,
        "crudModel": crudModel,
        "viewManager": view_manager,
        "response": response
    }
    return autoloadObject[moduleName];
}
module.exports = autoload
