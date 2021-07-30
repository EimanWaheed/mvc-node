/**
 * Creates model of type specified.
 * @param {string} modelName 
 */
function createModel(modelName) {
    modelType = new (require(`${process.env.FILEPATH}/app/models/${modelName}.js`));
    return modelType;
}
module.exports = createModel

