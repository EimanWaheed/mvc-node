/** Class representing student controller for creating student object. */
module.exports = class studentController {
    constructor(name) {
        this.name = name;
        console.log("student controller is called")
        console.log(this.name);
    }
}