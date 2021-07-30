/** Acquiring the modules. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const request = autoload('request');
const createModel = autoload('modelObject');
const viewManager = autoload('viewManager');
let requestInstance = request.getInstance();
/** Class representing CRUD operations. */
module.exports = class RestController {

    /** Initialises the model object specified in the request. */
    create() {
        let modelObj = "";
        console.log("create() is called");
        modelObj = createModel(requestInstance.controllerName);
        modelObj.create();
    }
    update() {
        console.log("update() is called");
    }
    list() {
        console.log("list() is called");
    }
    delete() {
        console.log("delete() is called");
    }
    loadDefault() {
        console.log("DefaultViewLoader() called");
        /** View Manager is called. */
        if (!requestInstance.controllerName) { //for handling undefined case, views->default->defaultView
            viewManager.viewManager('default', 'defaultView');
        } else {
            viewManager.viewManager(requestInstance.controllerName, requestInstance.actionName);
        }
    }
    /** Dynamically calls the action specified in the request. */
    performAction() {
        console.log("performAction() is called");
        if (requestInstance.actionName) {
            this[requestInstance.actionName]();
        } else {
            return this.loadDefault();
        }
    }

}