const request = require('./request.js');
const controller = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
function Dispatch() {
    console.log("Dispatcher is invoked")
    requestInstance = request.getInstance();
    controllerObj = controller.createController(requestInstance.controllerName);
    controllerObj.performAction(requestInstance.actionName);
}
module.exports = {
    Dispatch
};