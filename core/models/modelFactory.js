/** Class representing the factory for building specified model. */
module.exports = class ModelFactory {
    /**
    * Creates model of type specified.
    * @param {string} modelName 
    */
    createModel(modelName) {
        let modelType = new (require(`${process.env.FILEPATH}/app/models/${modelName}.js`));
        return modelType;
    }
}


