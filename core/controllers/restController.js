/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

const viewManager = autoload('viewManager');

/** Class representing CRUD operations which will be responsible for generating 
 * model object and returning the views for create, delete, list , update and default. 
 * These CRUD operations are perfomed for the specific controller and thus 
 * it generates the model object specified in each of these CRUD operations.
 * This class is also responsible for returning all the views for the specified 
 * controller and action.
 */
module.exports = class RestController {

    getModel(controllerName) {
        const modelFactory = autoload('modelFactory');
        return modelFactory.createModel(controllerName);
    }
    /**
     * Initialises the model object of the type specified in the request by 
     * invoking the createModel method of the modelFactory, as the object is 
     * created, it further invokes its respective CRUD operation which is
     * create in this case and pass it the params achieved from request. The 
     * next main task is to load the views for the specfied controller and 
     * action and return it.
     * @param {string} controllerName 
     */
    create(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            if (Object.keys(params).length != 0) {
                this.getModel(controllerName).create(params);
            }
            return viewManager.loadView(controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Initialises the model object of the type specified in the request by 
     * invoking the createModel method of the modelFactory, as the object is 
     * created, it further invokes its respective CRUD operation which is
     * update in this case and pass it the params achieved from request. The 
     * next main task is to load the views for the specfied controller and 
     * action and return it.
     * @param {string} controllerName 
     */
    update(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            if (Object.keys(params).length != 0) {
               this. getModel(controllerName).update(params);
            }
            return viewManager.loadView(controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Initialises the model object of the type specified in the request by 
     * invoking the createModel method of the modelFactory, as the object is 
     * created, it further invokes its respective CRUD operation which is
     * list in this case and pass it the params achieved from request. The 
     * next main task is to load the views for the specfied controller and 
     * action and return it.
     * @param {string} controllerName 
     */
    list(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            let result = this.getModel(controllerName).list(params);
            viewManager.setData(result);
            return viewManager.loadView(controllerName, `${actionName}Data`);
        }
        catch (error) {
            throw new Error(error);
        }

    }

    /**
     * Initialises the model object of the type specified in the request by 
     * invoking the createModel method of the modelFactory, as the object is 
     * created, it further invokes its respective CRUD operation which is
     * delete in this case and pass it the params achieved from request. The 
     * next main task is to load the views for the specfied controller and 
     * action and return it.
     * @param {string} controllerName 
     */
    delete(controllerName, actionName) {
        try {
            const params = autoload('request').getInstance().getParams();
            if (Object.keys(params).length != 0) {
                this.getModel(controllerName).delete(params);
            }
            return viewManager.loadView(controllerName, actionName);
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Loads the view for the default case for each of the controller i.e.,
     * student, teacher and course. It decides the viewing of default view on 
     * the grounds of controller name and action which are received as params
     * of the method.
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
     * Dynamically calls the action specified in the params of the method. It
     * decides which CRUD operation to call for the controller and thus invokes
     * the CRUD operation by dynamically making the function call.
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