const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** Class representing student model for creating an object. */
module.exports = class teacherModel extends crudModel {
    constructor() {
        super();
        //console.log("teacher model is called")
    }
}