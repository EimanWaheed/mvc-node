/** Class representing dispatcher which is responsbible for invoking Controller. */
module.exports = class Dispatcher {

    /** Fetches the targetted controller. */
    dispatchRequest() {

        /** Acquiring modules. */
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const request = autoload.autoload('request');
        const controller = autoload.autoload('controller');
        console.log("Dispatcher is invoked")
        let controllerObj = "";
        requestInstance = request.getInstance();
        /** Check the availibility of controller. */
        if (requestInstance.controllerName) {
            controllerObj = controller.createController(requestInstance.controllerName);
            controllerObj.performAction(requestInstance.actionName);
        } else {
            controllerObj = new (require(`${process.env.FILEPATH}/app/controllers/defaultController.js`));
        }
    }
}