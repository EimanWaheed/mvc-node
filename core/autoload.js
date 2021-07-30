/**
 * Autoload function takes module name as an input, loads it and returns the object.
 * @param {string} moduleName 
 */
function autoload(moduleName) {

    const request = require(`${process.env.FILEPATH}/core/request.js`);
    const appObject = require(`${process.env.FILEPATH}/public/app.js`);
    const appStart = new appObject();
    const dispatcher = require(`${process.env.FILEPATH}/core/dispatcher.js`);
    const dispatchRequest = new dispatcher();
    const controller_factory = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
    const controllerFactory = new controller_factory();
    const model_factory = require(`${process.env.FILEPATH}/core/models/modelFactory.js`);
    const modelFactory = new model_factory();
    const RestController = require(`${process.env.FILEPATH}/core/controllers/restController.js`);
    const crudModel = require(`${process.env.FILEPATH}/core/models/crudModel.js`);
    const viewManager = require(`${process.env.FILEPATH}/core/views/viewManager.js`);
    const view_manager = new viewManager();
    const response = require(`${process.env.FILEPATH}/core/response.js`);
    autoloadObject = {
        "request": request,
        "appObject": appStart,
        "dispatcher": dispatchRequest,
        "controllerFactory": controllerFactory,
        "modelFactory": modelFactory,
        "RestController": RestController,
        "crudModel": crudModel,
        "viewManager": view_manager,
        "response": response
    }
    return autoloadObject[moduleName];
}
module.exports = autoload
