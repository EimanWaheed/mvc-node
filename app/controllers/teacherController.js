const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const RestController = autoload('RestController');

/** Class representing teacher controller for creating teacher object. */
module.exports = class teacherController extends RestController {
    constructor() {
        super();
    }
}