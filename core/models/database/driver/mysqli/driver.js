const mysql = require('mysql');
module.exports = class Driver {

    static getInstance() {
        if (!Driver.instance) {
            Driver.instance = new Driver();
        }
        return Driver.instance;
    }
    buildConnection() {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123",
            database: "Master_MVC",
        });
        return connection;
    }
    runQuery(queryString) {
        const connection = this.buildConnection();
        connection.query(queryString);
    }
}