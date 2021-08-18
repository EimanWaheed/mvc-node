const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
const dbFactory = new (autoload.getFileName('dbFactory'));

/** Class representing CRUD operations which will be responsible for creating,
 * updating, deleting and listing records. These CRUD operations are perfomed
 * for the specific model and thus querybuilder is responsible for generating
 * the query and returning its results back. This class also handles the use of
 * driver instance which will run the query.
 */
class CRUDModel {

    /**
     * Returns the driver object of the specified database. 
     * @return {object} Driver object.
     */
    /* istanbul ignore next */
    getDriver() {
        return dbFactory.loadDriver();
    }

    /**
     * Returns the querybuilder object of the specified database. 
     * @return {object} QueryBuilder object.
     */
    /* istanbul ignore next */
    getQueryBuilder() {
        return dbFactory.loadQueryBuilder();
    }

    /**
     * Returns the entity object. 
     * @return {object} Entity object.
     */
    /* istanbul ignore next */
    getEntity() {
        return this.entity;
    }
    /**
     * Initialises the metadata of respective model as it takes params as a 
     * parameter, gets the querybuilder and driver instance by invoking getter
     * and setter for each of them which will generate the insert query and 
     * execute it respectively.
     * @param {object} params 
     * @returns {Object} query object.
     */
    create(params) {
        try {
            this.getEntity().setEntity(params);
            let queryString = this.getQueryBuilder().create(this.entity);
            return (this.getDriver().runQuery(queryString));
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Initialises the metadata of respective model as it takes params as a 
     * parameter, gets the querybuilder and driver instance by invoking getter
     * and setter for each of them which will generate the update query and 
     * execute it respectively.
     * @param {object} params 
     * @returns {Object} query object.
     */
    update(params) {
        try {
            this.getEntity().setEntity(params);
            let queryString = this.getQueryBuilder().update(this.entity);
            return (this.getDriver().runQuery(queryString));
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Initialises the metadata of respective model as it takes params as a 
     * parameter, gets the querybuilder and driver instance by invoking getter
     * and setter for each of them which will generate the select query and 
     * execute it respectively.
     * @param {object} params 
     * @returns {Object} query object.
     */
    list(params) {
        try {
            this.getEntity().setEntity(params);
            let queryString = this.getQueryBuilder().list(this.entity);
            return (this.getDriver().runQuery(queryString));
        }
        catch (error) {
            throw new Error(error);
        }
    }

    /**
     * Initialises the metadata of respective model as it takes params as a 
     * parameter, gets the querybuilder and driver instance by invoking getter
     * and setter for each of them which will generate the delete query and 
     * execute it respectively.
     * @param {object} params 
     * @returns {Object} query object.
     */
    delete(params) {
        try {
            this.getEntity().setEntity(params);
            let queryString = this.getQueryBuilder().delete(this.entity);
            return (this.getDriver().runQuery(queryString));
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = CRUDModel;