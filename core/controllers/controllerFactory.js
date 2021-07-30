/** Class representing the factory for building specified controller. */
module.exports = class controllerFactory {
    /**
     * Creates controller of type specified.
     * @param {string} controllerName 
     */
    createController(controllerName) {
        let controllerType = new (require(`${process.env.FILEPATH}/app/controllers/${controllerName}Controller.js`));
        return controllerType;
    }
}
