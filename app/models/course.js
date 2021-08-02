const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** Class representing student model for creating an object. */
module.exports = class courseModel extends crudModel {
    constructor() {
        super();
        //console.log("course model is called")
    }
}