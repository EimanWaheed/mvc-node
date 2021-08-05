/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const modelFactory = autoload('modelFactory');
const viewManager = autoload('viewManager');

/** Class representing CRUD operations. */
module.exports = class RestController {

    /**
     * Initialises the model object specified in the request.
     * @param {string} controllerName 
     */
    create(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            if (Object.keys(params).length != 0) {
                modelFactory.createModel(controllerName).create(params);
            }
            return viewManager.loadView(controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Performs update operation.
     * @param {string} controllerName 
     */
    update(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            if (Object.keys(params).length != 0) {
                modelFactory.createModel(controllerName).update(params);
            }
            return viewManager.loadView(controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Lists the items.
     * @param {string} controllerName 
     */
    list(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            let result = modelFactory.createModel(controllerName).list(params);
            viewManager.setData(result);
            return viewManager.loadView(controllerName, `${actionName}Data`);
        }
        catch (error) {
            throw new Error(error);
        }

    }

    /**
     * Deletes specified record.
     * @param {string} controllerName 
     */
    delete(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            if (Object.keys(params).length != 0) {
                modelFactory.createModel(controllerName).delete(params);
            }
            return viewManager.loadView(controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Loads the default views using view manager.
     * @param {string} controllerName 
     */
    defaultView(controllerName, actionName) {
        try {
            return viewManager.loadView(controllerName, 'defaultView');
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Dynamically calls the action specified in the request.
     * @param {string} controllerName 
     */
    performAction(controllerName, actionName) {
        try {
            if (!actionName) {
                actionName = 'defaultView';
            }
            return this[actionName](controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

}