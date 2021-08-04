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
    create(controllerName) {
        const params = autoload('request').getInstance().getParams();
        if (Object.keys(params).length != 0) {
            modelFactory.createModel(controllerName).create(params);
        }
        return viewManager.loadView(controllerName, autoload('request').getInstance().getAction());
    }

    /**
     * Performs update operation.
     * @param {string} controllerName 
     */
    update(controllerName) {
        const params = autoload('request').getInstance().getParams();
        if (Object.keys(params).length != 0) {
            modelFactory.createModel(controllerName).update(params);
        }
        return viewManager.loadView(controllerName, autoload('request').getInstance().getAction());
    }

    /**
     * Lists the items.
     * @param {string} controllerName 
     */
    list(controllerName) {
        const params = autoload('request').getInstance().getParams();
        let result=modelFactory.createModel(controllerName).list(params);
        viewManager.setData(result);
        return viewManager.loadView(controllerName, `${autoload('request').getInstance().getAction()}Data`);
        
        // let payLoad = { 'data': [] };
        // payLoad.data = result; 
        // return payLoad;
    }

    /**
     * Deletes specified record.
     * @param {string} controllerName 
     */
    delete(controllerName) {
        const params = autoload('request').getInstance().getParams();
        if (Object.keys(params).length != 0) {
            modelFactory.createModel(controllerName).delete(params);
        }
        return viewManager.loadView(controllerName, autoload('request').getInstance().getAction());
    }

    /**
     * Loads the default views using view manager.
     * @param {string} controllerName 
     */
    defaultView(controllerName) {
        return viewManager.loadView(controllerName, 'defaultView');
    }

    /**
     * Dynamically calls the action specified in the request.
     * @param {string} controllerName 
     */
    performAction(controllerName, actionName) {
        if (!actionName) {
            actionName = 'defaultView';
        }
        return this[actionName](controllerName);
    }

}