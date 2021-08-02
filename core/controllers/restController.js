/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        
/** Class representing CRUD operations. */
module.exports = class RestController {

    /**
     * Initialises the model object specified in the request.
     * @param {string} controllerName 
     */
    create(controllerName) {
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
        const viewManager = autoload('viewManager');
        console.log("update() is called");
        return viewManager.loadView(controllerName, requestInstance.getAction());
    }

    /**
     * Lists the items.
     * @param {string} controllerName 
     */
    list(controllerName) {
        const viewManager = autoload('viewManager');
        console.log("list() is called");
        return viewManager.loadView(controllerName, `${requestInstance.getAction()}Data`);
    }

    /**
     * Deletes specified record.
     * @param {string} controllerName 
     */
    delete(controllerName) {
        const viewManager = autoload('viewManager');
        console.log("delete() is called");
        return viewManager.loadView(controllerName, requestInstance.getAction());
    }

    /**
     * Loads the default views using view manager.
     * @param {string} controllerName 
     */
    defaultView(controllerName) {
        const viewManager = autoload('viewManager');
        return viewManager.loadView(controllerName, 'defaultView');
    }

    /**
     * Dynamically calls the action specified in the request.
     * @param {string} controllerName 
     */
    performAction(controllerName) {
        const requestInstance = autoload('request').getInstance();
        let actionName = requestInstance.getAction();
        if (!actionName) {
            actionName = 'defaultView';
        }
        return this[actionName](controllerName);
    }

}