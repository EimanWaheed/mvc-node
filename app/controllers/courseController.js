const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const RestController = autoload('RestController');

/** Class representing course controller for creating course object. */
module.exports = class courseController extends RestController {
    constructor() {
        super();
        //console.log("course controller is called")
    }
}