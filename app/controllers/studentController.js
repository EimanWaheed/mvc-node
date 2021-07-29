const RestController=require(`${process.env.FILEPATH}/core/controllers/restController.js`);
/** Class representing student controller for creating student object. */
module.exports = class studentController extends RestController {
    constructor() {
        super();
        //console.log("student controller is called")
    }
}