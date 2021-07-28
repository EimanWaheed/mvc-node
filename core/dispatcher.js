const request = require('./request.js');
const controller = require(`${process.env.FILEPATH}/core/controllers/controllerFactory.js`);
function Dispatch() {
    console.log("Dispatcher is invoked")
    requestInstance = request.getInstance();
    console.log(requestInstance.controllerName);
    controllerObj = controller.createController(requestInstance.controllerName);
    console.log("Controller object is");
    console.log(controllerObj);
}
module.exports = {
    Dispatch
};