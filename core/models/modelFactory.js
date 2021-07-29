/**
 * Creates model of type specified.
 * @param {string} modelName 
 */
function createModel(modelName) {
    if (modelName) {
        //console.log("I am a controller factory", controllerName);
        modelType = new (require(`${process.env.FILEPATH}/app/models/${modelName}.js`));
        //console.log(controllerType);
    } else {
        modelType = new (require(`${process.env.FILEPATH}/app/models/default.js`));
    }
    return modelType;
}
module.exports = {
    createModel
}
