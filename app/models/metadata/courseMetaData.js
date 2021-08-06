/** 
 * Class representing Course Metadata which is responsible for setting the metadata of
 * Course havign properties of id, name and courseCode. These properties must be in 
 * accordance with the column names in database which is called Object Relation Mapping.
 * The course metadata class is implementing the ORM (Object relation mapping) for the 
 * synchronous mapping of data in the database. 
 */
module.exports = class CourseMetaData {
    constructor() {
        this.tableName = "course";
    }

    /**
     * Sets the params to the metadata of course.
     * @param {Object} params 
     */
    setEntity(params) {
        this.id = params['id'];
        this.name = params['name'];
        this.courseCode = params['coursecode'];
    }
}