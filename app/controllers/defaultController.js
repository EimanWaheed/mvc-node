const RestController=require(`${process.env.FILEPATH}/core/controllers/restController.js`);
/** Class representing default controller for creating default controller object. */
module.exports = class defaultController extends RestController{
    constructor() {
        super();
        //console.log("default controller is called")
    }
}