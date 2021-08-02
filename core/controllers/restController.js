/** Class representing CRUD operations. */
module.exports = class RestController {

    /**
     * Initialises the model object specified in the request.
     * @param {string} controllerName 
     */
    create(controllerName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const modelFactory = autoload('modelFactory');
        const viewManager = autoload('viewManager');
        let modelObject = modelFactory.createModel(controllerName);
        modelObject.create();
        return viewManager.loadView(controllerName, requestInstance.getAction());
    }

    /**
     * Performs update operation.
     * @param {string} controllerName 
     */
    update(controllerName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const viewManager = autoload('viewManager');
        console.log("update() is called");
    }

    /**
     * Lists the items.
     * @param {string} controllerName 
     */
    list(controllerName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const viewManager = autoload('viewManager');
        console.log("list() is called");
    }

    /**
     * Deletes specified record.
     * @param {string} controllerName 
     */
    delete(controllerName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const viewManager = autoload('viewManager');
        console.log("delete() is called");
    }

    /**
     * Loads the default views using view manager.
     * @param {string} controllerName 
     */
    loadDefault(controllerName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const viewManager = autoload('viewManager');
        return viewManager.loadView(controllerName, 'defaultView');
    }

    /**
     * Dynamically calls the action specified in the request.
     * @param {string} controllerName 
     */
    performAction(controllerName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const requestInstance = autoload('request').getInstance();
        let actionName = requestInstance.getAction();
        if (!actionName) {
            actionName = 'loadDefault';
        }
        return this[actionName](controllerName);
    }

}