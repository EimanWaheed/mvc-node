const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
const viewManager = new (autoload.getFileName('viewManager'));

/**
 * Class representing error controller which is responsible for representing the controller
 * object which will be generated in case of any error generated by other controllers and 
 * it will be further used to load the error page for the user.
 */
class ErrorController {

    /**
     * Function responsible for returning the response object which has the error data loaded in it.
     * @returns {Object} response object.
     */
    displayError() {
        return (viewManager.loadView("error", "defaultView"));
    }
}
module.exports = ErrorController;