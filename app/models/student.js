const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** Class representing student model for creating an object. */
module.exports = class studentModel extends crudModel {
    constructor() {
        super();
        console.log("student model is called")
        const studentMetaData=autoload('studentMetaData');
        this.entity=new studentMetaData();
    }
}