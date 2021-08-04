const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** Class representing student model for creating an object. */
module.exports = class CourseModel extends crudModel {
    constructor() {
        super();
        const courseMetaData=autoload('courseMetaData');
        this.entity=new courseMetaData();
    }
}