const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** 
* Class representing teacher model which has the property of entity having all the metadata in
* its instance which will be used for the running its own CRUD operations. Teacher Model is 
* extending CrudModel which explicitly inherits all of the CRUD operations thus ensuring the 
* reusability. The property of teacher model will make it easy to access its metadata.
*/
class TeacherModel extends crudModel {
    /**
     * @constructor
     * @property {Object} teacherMetaData
     */
    constructor() {
        super();
        const teacherMetaData = autoload('teacherMetaData');
        this.entity = new teacherMetaData();
    }
}
module.exports = TeacherModel;