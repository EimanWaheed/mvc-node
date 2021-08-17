const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();

/** Class representing dispatcher which is responsbible for getting the required 
 * controller and invoking the performAction method for deciding the CRUD operation.
 * It checks the availability of controller and action, invokes the controller factory 
 * which returns the required controller object. It then dispatches the controller and 
 * action from request to the specified method. 
 */
class Dispatcher {

    /** Fetches the request instance, get the controller name and action, check if
     * controller is available or not and then creates the controller object by 
     * invoking controller factory and retrieves the targetted controller. 
     * @returns {Object} response.
     */
    dispatchRequest() {

        try {
            let requestInstance = (autoload.getFileName('request')).getInstance();
            let controllerName = requestInstance.getController();
            let actionName = requestInstance.getAction();
            if (!controllerName) {
                controllerName = 'default';
            }
            return (new (autoload.getFileName('controllerFactory'))).createController(controllerName).performAction(controllerName, actionName);
        }
        catch (error) {
            return (new (autoload.getFileName('errorController'))).displayError();
        }
    }
}
module.exports = Dispatcher;