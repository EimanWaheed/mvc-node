
module.exports = class ViewManager {
    viewManager(controllerName, actionName) {
        const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
        const fs = require('fs');
        const response = autoload('response');
        console.log("View Manager() is called");
        let myHtmlData = "";
        const data = fs.readFileSync(`${process.env.FILEPATH}/app/views/${controllerName}/${actionName}.html`, { encoding: 'utf8', flag: 'r' });
        console.log(data);
    }
}