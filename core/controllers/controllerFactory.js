/**
 * Creates controller of type specified.
 * @param {string} controllerName 
 */
function createController(controllerName) {

    /** Check the availibility of controller. */
    let controllerType = new (require(`${process.env.FILEPATH}/app/controllers/${controllerName}Controller.js`));
    return controllerType;
}
module.exports = createController
