/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

/** Class representing CRUD operations. */
module.exports = class CRUDModel {
    create() {
        console.log("model create() is called");
        const queryBuilder = autoload('queryBuilder');
        const driver = autoload('driver');
        this.entity.setEntity(autoload('request').getInstance().getParams());
        console.log(this.entity);
        const driverInstance = driver.getInstance();
        let queryString = queryBuilder.create(this.entity);
        driverInstance.runQuery(queryString);
    }
    update() {
        console.log("update() is called");
        const queryBuilder = autoload('queryBuilder');
        const driver = autoload('driver');
        this.entity.setEntity(autoload('request').getInstance().getParams());
        console.log(this.entity);
        const driverInstance = driver.getInstance();
        let queryString = queryBuilder.update(this.entity);
        driverInstance.runQuery(queryString);
    }
    list() {
        console.log("list() is called");
    }
    delete() {
        console.log(",odel delete() is called");
        const queryBuilder = autoload('queryBuilder');
        const driver = autoload('driver');
        this.entity.setEntity(autoload('request').getInstance().getParams());
        console.log(this.entity);
        const driverInstance = driver.getInstance();
        let queryString = queryBuilder.delete(this.entity);
        driverInstance.runQuery(queryString);
    }
}