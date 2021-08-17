const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
const RestController = autoload.getFileName('restController');

/**
 * Class representing student controller which is responsible for identifying the controller
 * to be set in the requestInstance and its instance will be used for performing the action 
 * based on the action. Student controller is extending RestController which explicitly inherits
 * all of the CRUD operations thus ensuring the reusability.
 */
class StudentController extends RestController {

    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = StudentController;