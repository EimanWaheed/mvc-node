/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const mustache=require('mustache');
/** Class representing View Manager which is responsible for loading view. */
module.exports = class ViewManager {

    /**
     * Loads and returns the required view. 
     * @param {string} controllerName 
     * @param {string} actionName 
     */
    loadView(controllerName, actionName) {
        const fs = require('fs');
        const response = autoload('response');
        console.log("View Manager() is called");
        const htmlData = fs.readFileSync(`${process.env.FILEPATH}/app/views/${controllerName}/${actionName}.html`, 'utf-8');
        const viewString = mustache.render(htmlData, this.data);
        response.setContent(viewString);
        return response;

    }
    /**
     * Sets the database fetched data in the class property.
     * @param {string} data 
     */
    setData(data) {
        this.data = data;
    }
}