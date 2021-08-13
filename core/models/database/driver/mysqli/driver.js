const mySql = require("sync-mysql");

/** Class representing the driver for the database connection, for the purpose of setting the database connection
* of the required database. It has the significance of building the connection specifying all the parameters required
* to build the connection. Since, no multiple database connections can be made after we have instance of a required
* database so the instance of this class is made singleton using Singleton Design Pattern. Furthermore, this class is 
* responsible for running the query after building the connection. 
*/
class Driver {

    /**
     * @constructor
     * @property {Object} connection.
     */
    constructor() {
        this.connection = new mySql({
            host: "localhost",
            user: "root",
            password: "123",
            database: "Master_MVC",
        });
    }

    /**
     * Get the singleton instance of the Driver class.
     * @returns {Object} The Driver instance.
     */
    static getInstance() {
        if (!Driver.instance) {
            Driver.instance = new Driver();
        }
        return Driver.instance;
    }

    /**
     * Get the connection string.
     * @returns {string} The connection string.
     */
    getConnection() {
        return this.connection;
    }

    /**
     * Runs the query which is specified as a querystring in the param of the method
     * and returns the result of the executed query.
     * @param {string} queryString 
     * @returns {Object} The query result.
     */
    runQuery(queryString) {
        try {
            const connection = this.getConnection();
            return connection.query(queryString);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = Driver;