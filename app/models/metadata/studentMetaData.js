
module.exports = class StudentMetaData {
    constructor() {
        console.log("student metadata is called");
        this.tableName = "student";
    }

    setEntity(params) {
        console.log("setEntity() called");
        this.id = params['id'];
        this.name = params['name'];
        this.password = params['password'];
        this.email = params['email'];

    }
}