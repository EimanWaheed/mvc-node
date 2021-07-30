/** Class representing running application from single entry point. */
module.exports = class App {

    /** Runs the applicating by invoking Dispatcher. */
    runApp() {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        console.log('App is invoked');
        return autoload('dispatcher').dispatchRequest();
        
    }
}