/**
 * Autoload function that takes file name as an input, loads it and returns the class. This function is
 * responsible for requiring classes based on the moduleName specified as the key which returns the value
 * against the class name specified.
 * @param {string} moduleName 
 */
function autoload(moduleName) {

    const request = require(`${process.env.FILEPATH}/core/request.js`);
    const app = require(`${process.env.FILEPATH}/public/app.js`);
    const dispatcher = require(`${process.env.FILEPATH}/core/dispatcher.js`);
    const controllerFactory = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
    const modelFactory = require(`${process.env.FILEPATH}/core/models/modelFactory.js`);
    const RestController = require(`${process.env.FILEPATH}/core/controllers/restController.js`);
    const crudModel = require(`${process.env.FILEPATH}/core/models/crudModel.js`);
    const viewManager = require(`${process.env.FILEPATH}/core/views/viewManager.js`);
    const response = require(`${process.env.FILEPATH}/core/response.js`);
    const studentMetaData = require(`${process.env.FILEPATH}/app/models/metadata/studentMetaData.js`);
    const teacherMetaData = require(`${process.env.FILEPATH}/app/models/metadata/teacherMetaData.js`);
    const courseMetaData = require(`${process.env.FILEPATH}/app/models/metadata/courseMetaData.js`);
    const dbFactory = require(`${process.env.FILEPATH}/core/models/database/dbFactory.js`);
    const queryBuilder = require(`${process.env.FILEPATH}/core/models/database/driver/mysqli/queryBuilder.js`);
    const driverInstance = require(`${process.env.FILEPATH}/core/models/database/driver/mysqli/driver.js`);
    autoloadObject = {
        "request": request,
        "app": app,
        "dispatcher": dispatcher,
        "controllerFactory": controllerFactory,
        "modelFactory": modelFactory,
        "RestController": RestController,
        "crudModel": crudModel,
        "viewManager": viewManager,
        "response": response,
        "studentMetaData": studentMetaData,
        "teacherMetaData": teacherMetaData,
        "courseMetaData": courseMetaData,
        "dbFactory": dbFactory,
        "queryBuilder": queryBuilder,
        "driver": driverInstance
    }
    return autoloadObject[moduleName];
}
module.exports = autoload
