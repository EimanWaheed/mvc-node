const mySql = require("sync-mysql");

/** Class representing the database connection, for the purpose of setting the database connection.
This class is responsible for running the query, thus the instance of this class is made singleton using Singleton Design Pattern. */
module.exports = class Driver {

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
     * @return {string} The Driver instance.
     */
    static getInstance() {
        if (!Driver.instance) {
            Driver.instance = new Driver();
        }
        return Driver.instance;
    }

    /**
     * Get the connection string.
     * @return {string} The connection string.
     */
    getConnection() {
        return this.connection;
    }

    /**
     * Runs the query and returns the result.
     * @param {string} queryString 
     * @return {object} The fetched data object.
     */
    runQuery(queryString) {
        try {
            const connection = this.getConnection();
            return connection.query(queryString);
        }
        catch (error) {
            throw new Error("Database not connected.");
        }
    }
}