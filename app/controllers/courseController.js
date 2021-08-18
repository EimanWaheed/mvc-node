const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
const RestController = autoload.getFileName('restController');

/**
 * Class representing course controller which is responsible for identifying the controller
 * to be set in the requestInstance and its instance will be used for performing the action 
 * based on the action. Course controller is extending RestController which explicitly inherits
 * all of the CRUD operations thus ensuring the reusability.
 */
class CourseController extends RestController {

    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = CourseController;