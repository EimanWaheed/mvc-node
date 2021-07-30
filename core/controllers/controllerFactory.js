/**
 * Creates controller of type specified.
 * @param {string} controllerName 
 */
function createController(controllerName) {
    controllerType = new (require(`${process.env.FILEPATH}/app/controllers/${controllerName}Controller.js`));
    return controllerType;
}
module.exports = createController
