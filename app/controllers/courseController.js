/** Class representing course controller for creating course object. */
module.exports = class courseController {
    constructor(name) {
        this.name = name;
        console.log("course controller is called")
        console.log(this.name);
    }
}