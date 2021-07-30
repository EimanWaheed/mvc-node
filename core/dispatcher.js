/** Class representing dispatcher which is responsbible for invoking Controller. */
module.exports = class Dispatcher {

    /** Fetches the targetted controller. */
    dispatchRequest() {

        /** Acquiring modules. */
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const request = autoload('request');
        const createController = autoload('controller');
        let requestInstance = request.getInstance();

        /** Check the availibility of controller. */
        let controllerName = requestInstance.getController();
        if (!controllerName) {
            controllerName = 'default';
        }
        let controllerObj = createController(controllerName).performAction();
    }
}