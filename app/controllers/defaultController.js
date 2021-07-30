const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const RestController = autoload('RestController');

/** Class representing default controller for creating default controller object. */
module.exports = class defaultController extends RestController {
    constructor() {
        super();
        //console.log("default controller is called")
    }
}