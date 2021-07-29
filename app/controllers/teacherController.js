const RestController=require(`${process.env.FILEPATH}/core/controllers/restController.js`);
/** Class representing teacher controller for creating teacher object. */
module.exports = class teacherController extends RestController{
    constructor() {
        super();
        //console.log("teacher controller is called")
    }
}