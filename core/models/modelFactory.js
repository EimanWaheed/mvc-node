/**
 * Creates model of type specified.
 * @param {string} modelName 
 */
function createModel(modelName) {
        //console.log("I am a controller factory", controllerName);
        modelType = new (require(`${process.env.FILEPATH}/app/models/${modelName}.js`));
        //console.log(controllerType);
    return modelType;
}
module.exports = {
    createModel
}
