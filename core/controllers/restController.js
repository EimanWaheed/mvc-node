const request = require(`${process.env.FILEPATH}/core/request.js`);
const modelObject = require(`${process.env.FILEPATH}/core/models/modelFactory.js`);
/** Class representing CRUD operations. */
module.exports = class RestController {
    create() {
        console.log("create() is called");
        //modelObject.createModel();
    }
    update() {
        console.log("update() is called");
    }
    list() {
        console.log("list() is called");
    }
    delete() {
        console.log("delete() is called");
    }
    performAction(actionName) {
        console.log("performAction() is called");
        /** Dyanmic function call for action specified in request. */
        this[actionName]();
    }

}