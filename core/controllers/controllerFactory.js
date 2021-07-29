/**
 * Creates controller of type specified.
 * @param {string} controllerName 
 */
function createController(controllerName) {
    if (controllerName) {
        controllerType = new (require(`${process.env.FILEPATH}/app/controllers/${controllerName}Controller.js`));
    } else {
        controllerType = new (require(`${process.env.FILEPATH}/app/controllers/defaultController.js`));
    }
    return controllerType;
}
module.exports = {
    createController
}