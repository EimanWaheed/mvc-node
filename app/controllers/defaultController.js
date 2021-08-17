const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
const RestController = autoload.getFileName('restController');

/**
 * Class representing default controller which is responsible for identifying the controller
 * to be set in the requestInstance and its instance will be used for performing the action 
 * based on the action. Default controller is extending RestController which explicitly inherits
 * all of the CRUD operations thus ensuring the reusability.
 */
class DefaultController extends RestController {

    /**
     * @constructor
     */
    constructor() {
        super();
    }
}
module.exports = DefaultController;