const request = require('./request.js');
const controller = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
/** Class representing dispatcher which is responsbible for invoking Controller. */
module.exports = class Dispatcher {
    dispatchRequest() {
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