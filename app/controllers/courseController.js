const RestController=require(`${process.env.FILEPATH}/core/controllers/restController.js`);
/** Class representing course controller for creating course object. */
module.exports = class courseController extends RestController{
    constructor() {
        super();
        //console.log("course controller is called")
    }
}