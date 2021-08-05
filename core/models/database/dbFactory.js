/** Class respresenting Database Factory as it implements Database Abstraction Layer by acquiring runtime database objects. */
module.exports = class DbFactory {

    /**
     * Creates driver of database type specified in the environment variable.
     * @return {object} The driver instance.
     */
    loadDriver() {
        return require(`${process.env.FILEPATH}/core/models/database/driver/${process.env.DBNAME}/driver.js`).getInstance();
    }

    /**
     * Creates querybuilder of database type specified in the environment variable.
     * @return {object} The driver instance.
     */
    loadQueryBuilder() {
        return new (require(`${process.env.FILEPATH}/core/models/database/driver/${process.env.DBNAME}/queryBuilder.js`));
    }
}