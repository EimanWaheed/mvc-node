const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
/** 
 * Class representing the factory for building specified controller. It is responsible for building the
 * specified controller object. Factory Design Pattern is used in this class for creating desired objects
 * polymorphically. The object made is defined already and thus the required instance is returned.
 */
class ControllerFactory {

    /**
    * Creates controller of type specified by getting the controllerName specified 
    * as a parameter in the function definition. It creates the specific controller object 
    * using the environment variable from config.js and returns the controller object created. Error 
    * handling is also done in the case if the controller is not created due to some reasons,
    * just throw the error specifying the problem message.
    * @param {string} controllerName 
    * @returns {Object} controller object.
    */
    createController(controllerName) {
        try {
            return (new (autoload.getFileName(`${controllerName}Controller`)));
        }
        catch (error) {
            throw new Error(`${controllerName} object not created.`);
        }
    }
}
module.exports = ControllerFactory;
