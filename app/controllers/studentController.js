const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const RestController = autoload('RestController');

/** Class representing student controller for creating student object. */
module.exports = class studentController extends RestController {
    constructor() {
        super();
        //console.log("student controller is called")
    }
}