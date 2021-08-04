
module.exports = class CourseMetaData {
    constructor() {
        console.log("course metadata is called");
        this.tableName = "course";
    }

    setEntity(params) {
        console.log("setEntity() called");
        this.id = params['id'];
        this.name = params['name'];
        this.courseCode = params['coursecode'];
    }
}