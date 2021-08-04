/** Acquire Autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        
/** Class representing dispatcher which is responsbible for invoking Controller. */
module.exports = class Dispatcher {

    /** Fetches the targetted controller. */
    dispatchRequest() {

        /** Acquiring modules. */
        const controllerFactory = autoload('controllerFactory');
    
        /** Check the availibility of controller. */
        let controllerName = autoload('request').getInstance().getController();
        if (!controllerName) {
            controllerName = 'default';
        }
         return controllerFactory.createController(controllerName).performAction(controllerName,autoload('request').getInstance().getAction());
    }
}