/** Class representing View Manager which is responsible for loading view. */
module.exports = class ViewManager {

    /**
     * Loads and returns the required view. 
     * @param {string} controllerName 
     * @param {string} actionName 
     */
    loadView(controllerName, actionName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const fs = require('fs');
        const response = autoload('response');
        console.log("View Manager() is called");
        const HtmlData = fs.readFileSync(`${process.env.FILEPATH}/app/views/${controllerName}/${actionName}.html`, 'utf-8');
        response.setContent(HtmlData);
        return response;

    }
}