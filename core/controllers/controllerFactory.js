const studentController = require(`${process.env.FILEPATH}/app/controllers/studentController.js`);
const teacherController = require(`${process.env.FILEPATH}/app/controllers/teacherController.js`);
const courseController = require(`${process.env.FILEPATH}/app/controllers/courseController.js`);
/**
 * Creates controller of type specified.
 * @param {string} controllerName 
 */
function createController(controllerName) {
    console.log("I am a controller factory");
    let controllerType = "";
    if (controllerName === "student") {
        controllerType = new studentController('student');
    } else if (controllerName === "teacher") {
        controllerType = new teacherController('teacher');
    } else if (controllerName === "course") {
        controllerType = new courseController('course');
    }
    return controllerType;
}
module.exports = {
    createController
}