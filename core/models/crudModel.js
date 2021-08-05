/** Acquiring autoloader. */
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const dbFactory = autoload('dbFactory');

/** Class representing CRUD operations. */
module.exports = class CRUDModel {

    /**
     * Returns the driver of the specified database. 
     * @return {object} Driver object.
     */
    loadDriver() {
        return dbFactory.loadDriver();
    }

    /**
     * Returns the querybuilder of the specified database. 
     * @return {object} QueryBuilder object.
     */
    loadQueryBuilder() {
        return dbFactory.loadQueryBuilder();
    }

    /**
     * Initialises the metadata of respective model, build the insert query and execute it.
     * @param {object} params 
     */
    create(params) {
        console.log("crud create called");
        this.entity.setEntity(params);
        let queryString = this.loadQueryBuilder().create(this.entity);
        this.loadDriver().runQuery(queryString);
    }

    /**
     * Initialises the metadata of respective model, build the update query and execute it.
     * @param {object} params 
     */
    update(params) {
        this.entity.setEntity(params);
        let queryString = this.loadQueryBuilder().update(this.entity);
        this.loadDriver().runQuery(queryString);
    }

    /**
     * Initialises the metadata of respective model, build the select query and execute it.
     * @param {object} params 
     */
    list(params) {
        this.entity.setEntity(params);
        let queryString = this.loadQueryBuilder().list(this.entity);
        let result = this.loadDriver().runQuery(queryString);
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
        let queryString = this.loadQueryBuilder().delete(this.entity);
        this.loadDriver().runQuery(queryString);
    }
}