/** Class representing teacher controller for creating teacher object. */
module.exports = class teacherController {
    constructor(name) {
        this.name = name;
        console.log("teacher controller is called")
        console.log(this.name);
    }
}