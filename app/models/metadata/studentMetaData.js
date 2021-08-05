/** Class representing Student Metadata which is responsible for acquiring all the properties of a student entity. */
module.exports = class StudentMetaData {
    constructor() {
        this.tableName = "student";
    }

    /**
     * Sets the params to the metadata of student.
     * @param {object} params 
     */
    setEntity(params) {
        this.id = params['id'];
        this.name = params['name'];
        this.password = params['password'];
        this.email = params['email'];
    }
}