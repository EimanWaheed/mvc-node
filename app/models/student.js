const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** 
* Class representing student model which has the property of entity having all the metadata in
* its instance which will be used for the running its own CRUD operations. Student Model is 
* extending CrudModel which explicitly inherits all of the CRUD operations thus ensuring the 
* reusability. The property of student model will make it easy to access its metadata.
*/
class StudentModel extends crudModel {
    /**
     * @constructor
     * @property {Object} studentMetaData
     */
    constructor() {
        super();
        const studentMetaData = autoload('studentMetaData');
        this.entity = new studentMetaData();
    }
}
module.exports = StudentModel;