/** 
 * Class representing Student Metadata which is responsible for setting the metadata of
 * Student havign properties of id, name, password and email. These properties must be in 
 * accordance with the column names in database which is called Object Relation Mapping.
 * The student metadata class is implementing the ORM (Object relation mapping) for the 
 * synchronous mapping of data in the database. 
 */
class StudentMetaData {

    /**
     * @constructor
     */
    constructor() {
        /**
         * @property {string} tableName
         */
        this.tableName = "student";
    }

    /**
     * Sets the params to the metadata of student.
     * @param {Object} params 
     */
    setEntity(params) {
        this.id = params['id'];
        this.name = params['name'];
        this.password = params['password'];
        this.email = params['email'];
    }
}
module.exports = StudentMetaData;