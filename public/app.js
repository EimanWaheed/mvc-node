/** Class representing running application from single entry point. */
module.exports = class ApplicationRun {

    /** Runs the applicating by invoking Dispatcher. */
    runApp() {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const dispatcher = autoload('dispatcher');
        console.log('App is invoked');
        dispatcher.dispatchRequest();
    }
}