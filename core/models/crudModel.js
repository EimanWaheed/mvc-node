/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const driverInstance = autoload('driver').getInstance();

/** Class representing CRUD operations. */
module.exports = class CRUDModel {

    /**
     * Initialises the metadata of respective model, build the insert query and execute it.
     * @param {object} params 
     */
    create(params) {
        this.entity.setEntity(params);
        let queryString = autoload('queryBuilder').create(this.entity);
        driverInstance.runQuery(queryString);
    }

    /**
     * Initialises the metadata of respective model, build the update query and execute it.
     * @param {object} params 
     */
    update(params) {
        this.entity.setEntity(params);
        let queryString = autoload('queryBuilder').update(this.entity);
        driverInstance.runQuery(queryString);
    }

    /**
     * Initialises the metadata of respective model, build the select query and execute it.
     * @param {object} params 
     */
    list(params) {
        this.entity.setEntity(params);
        let queryString = autoload('queryBuilder').list(this.entity);
        let result = driverInstance.runQuery(queryString);
        let templateKey = { 'data': [] };
        templateKey.data = result;
        return templateKey;
    }

    /**
     * Initialises the metadata of respective model, build the delete query and execute it.
     * @param {object} params 
     */
    delete(params) {
        this.entity.setEntity(params);
        let queryString = autoload('queryBuilder').delete(this.entity);
        driverInstance.runQuery(queryString);
    }
}