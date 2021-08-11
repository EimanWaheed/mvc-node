/** Class representing the factory for building specified model. It is responsible for building the
 * specified model object. Factory Design Pattern is used in this class for creating desired objects
 * polymorphically. The object made is defined already and thus the required instance is returned.
 */
module.exports = class ModelFactory {

    /**
    * Creates model of type specified by getting the modelName specified as a parameter
    * in the function definition. It creates the specific model object using the 
    * environment variable from config.js and returns the model object created. Error 
    * handling is also done in the case if the model is not created due to some 
    * reasons,just throw the error specifying the problem message.
    * @param {string} modelName 
    */
    createModel(modelName) {
        try {
            return (new (require(`${process.env.FILEPATH}/app/models/${modelName}.js`)));
        }
        catch (error) {
            throw new Error(`${modelName} object not created.`);
        }
    }
}


