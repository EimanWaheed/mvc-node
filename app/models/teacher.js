const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** Class representing student model for creating an object. */
module.exports = class TeacherModel extends crudModel {
    constructor() {
        super();
        const teacherMetaData = autoload('teacherMetaData');
        this.entity = new teacherMetaData();
    }
}