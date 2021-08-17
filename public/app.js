/** Class representing the application which is responsible for dispatching the request received from the server. 
 * It is responsible for properly dispatching the request by invoking the dispatchRequest method of the Dispatch class.
 * This class is of primary purpose of dispatching the received request which is carried forwards using its runApp method. 
 */
class App {

    /** 
    * Runs the application by invoking Dispatcher.
    * @returns {Object} response.
    */
    runApp() {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
        return (new (autoload.getFileName('dispatcher'))).dispatchRequest();
    }
}
module.exports = App;