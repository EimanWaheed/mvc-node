const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const mustache = require('mustache');
/** Class representing View Manager which is responsible for loading view and setting the key for rendering the data.
 * It loads all the views that are present, renders them and displays them on the screen. For the purpose of setting 
 * the data from database dynamically, it makes use of the Mustache.js and renders the data and make it available.
 */
class ViewManager {

    /**
     * Loads the views specified in the controllerName and actionName for student, course,
     * teacher and default. For the purpose of setting the response object, it reads the 
     * html files and sets the data dynamically to be displayed on screen using Mustache.render
     * and returns the response object. 
     * @param {string} controllerName 
     * @param {string} actionName 
     * @returns {Object} response
     */
    loadView(controllerName, actionName) {
        try {
            const fs = require('fs');
            const response = new (autoload('response'));
            const htmlData = fs.readFileSync(`${process.env.FILEPATH}/app/views/${controllerName}/${actionName}.html`, 'utf-8');
            const viewString = mustache.render(htmlData, this.templateKey);
            response.setStatusCode(200);
            response.setContentType('text/html');
            response.setContent(viewString);
            return response;
        }
        catch (error) {
            throw new Error(`${actionName} view not loaded.`);
        }

    }
    /**
     * Sets the database fetched data in the class property.
     * @param {string} data 
     */
    setData(result) {
        this.templateKey = { 'data': [] };
        this.templateKey.data = result;
    }
}
module.exports = ViewManager;