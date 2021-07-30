/** Class representing dispatcher which is responsbible for invoking Controller. */
module.exports = class Dispatcher {

    /** Fetches the targetted controller. */
    dispatchRequest() {

        /** Acquiring modules. */
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const request = autoload('request');
        const createController = autoload('controller');
        let requestInstance = request.getInstance();
        let controllerObj = "";

        /** Check the availibility of controller. */
        if (requestInstance.controllerName) {
            controllerObj = createController(requestInstance.controllerName);
            controllerObj.performAction();
        } else {
            controllerObj = createController('default');
            controllerObj.performAction();
        }
    }
}