const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const RestController = autoload('RestController');

/**
 * Class representing student controller which is responsible for identifying the controller
 * to be set in the requestInstance and its instance will be used for performing the action 
 * based on the action. Student controller is extending RestController which explicitly inherits
 * all of the CRUD operations thus ensuring the reusability.
 */
module.exports = class studentController extends RestController {
    constructor() {
        super();
    }
}