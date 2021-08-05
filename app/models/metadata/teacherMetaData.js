/** Class representing Teacher Metadata which is responsible for acquiring all the properties of a teacher entity. */
module.exports = class TeacherMetaData {
    constructor() {
        console.log("teacher metadata is called");
        this.tableName = "teacher";
    }

    /**
    * Sets the params to the metadata of teacher.
    * @param {object} params 
    */
    setEntity(params) {
        console.log("setEntity() called");
        this.id = params['id'];
        this.name = params['name'];
        this.password = params['password'];
        this.email = params['email'];
    }
}