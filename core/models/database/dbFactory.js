/** 
 * Class representing the Database Factory for building specified driver and querybuilder as it implements 
 * Database Abstraction Layer by acquiring database name through environment variable. It is responsible for 
 * building the specified driver and querybuilder objects. Factory Design Pattern is used in this class for 
 * creating desired objects polymorphically. The object made is defined already and thus the required instance 
 * is returned.
 */
module.exports = class DbFactory {

    /**
     * Creates the driver of database type specified in the environment variable and returns it which is 
     * mandatory for executing the query, without this object it is not possible to execute the CRUD 
     * operations. Error handling is also done in the case if the driver is not created due to some reasons,
     * just throw the error specifying the problem message.
     * @returns {Object} The driver instance.
     */
    loadDriver() {
        try {
            return require(`${process.env.FILEPATH}/core/models/database/driver/${process.env.DBNAME}/driver.js`).getInstance();
        }
        catch (error) {
            throw new Error(`${process.env.DBNAME} driver not created.`);
        }
    }

    /**
     * Creates the querybuilder of database type specified in the environment variable and returns it which is 
     * mandatory for generating the query, without this object it is not possible to build the query for the CRUD 
     * operations. Error handling is also done in the case if the querybuilder is not created due to some reasons,
     * just throw the error specifying the problem message.
     * @returns {Object} The driver instance.
     */
    loadQueryBuilder() {
        try {
            return new (require(`${process.env.FILEPATH}/core/models/database/driver/${process.env.DBNAME}/queryBuilder.js`));
        }
        catch (error) {
            throw new Error(`${process.env.DBNAME} querybuilder not created.`);
        }
    }
}