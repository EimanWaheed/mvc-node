/** 
 * Class representing Teacher Metadata which is responsible for setting the metadata of
 * Teacher havign properties of id, name, password and email. These properties must be in 
 * accordance with the column names in database which is called Object Relation Mapping.
 * The teacher metadata class is implementing the ORM (Object relation mapping) for the 
 * synchronous mapping of data in the database. 
 */
module.exports = class TeacherMetaData {
    constructor() {
        this.tableName = "teacher";
    }

    /**
    * Sets the params to the metadata of teacher.
    * @param {Object} params 
    */
    setEntity(params) {
        this.id = params['id'];
        this.name = params['name'];
        this.password = params['password'];
        this.email = params['email'];
    }
}