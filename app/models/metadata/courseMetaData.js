/** Class representing Course Metadata which is responsible for acquiring all the properties of a course entity. */
module.exports = class CourseMetaData {
    constructor() {
        this.tableName = "course";
    }

    /**
     * Sets the params to the metadata of course.
     * @param {object} params 
     */
    setEntity(params) {
        this.id = params['id'];
        this.name = params['name'];
        this.courseCode = params['coursecode'];
    }
}