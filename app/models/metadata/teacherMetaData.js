
module.exports = class TeacherMetaData {
    constructor() {
        console.log("teacher metadata is called");
        this.tableName = "teacher";
    }

    setEntity(params) {
        console.log("setEntity() called");
        this.id = params['id'];
        this.name = params['name'];
        this.password = params['password'];
        this.email = params['email'];

    }
}