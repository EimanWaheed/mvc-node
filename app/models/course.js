const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const crudModel = autoload('crudModel');

/** 
* Class representing course model which has the property of entity having all the metadata in
* its instance which will be used for the running its own CRUD operations. Course Model is 
* extending CrudModel which explicitly inherits all of the CRUD operations thus ensuring the 
* reusability. The property of course model will make it easy to access its metadata.
*/
class CourseModel extends crudModel {
    /**
     * @constructor
     * @property {Object} courseMetaData
     */
    constructor() {
        super();
        const courseMetaData = autoload('courseMetaData');
        this.entity = new courseMetaData();
    }
}
module.exports = CourseModel;