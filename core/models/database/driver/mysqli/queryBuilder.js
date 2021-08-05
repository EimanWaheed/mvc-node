const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

/** Class representing the CRUD operations for building and returning sql queries. */
module.exports = class QueryBuilder {

    /**
     * Forms the insert sql query for inserting records in database.
     * @param {object} entity 
     * @return {sql query} sql query.
     */
    create(entity) {
        let keyString = "", valueString = "";
        for (const key in entity) {
            if (key != 'tableName' && key != 'id') {
                keyString += key + ',';
                valueString += "'" + entity[key] + "'" + ',';
            }
        }
        keyString = keyString.substring(0, keyString.length - 1);
        valueString = valueString.substring(0, valueString.length - 1);
        return (`INSERT INTO ${entity.tableName} (${keyString}) VALUES (${valueString})`);
    }

    /**
    * Forms the update sql query for updating records in database.
    * @param {object} entity 
    * @return {sql query} sql query.
    */
    update(entity) {
        let keyString = "";
        let valueString = "'" + entity['id'] + "'";
        for (const key in entity) {
            if (key != 'tableName') {
                keyString += key + '=' + "'" + entity[key] + "'" + ',';
            }
        }
        keyString = keyString.substring(0, keyString.length - 1);
        return (`UPDATE ${entity.tableName} SET ${keyString} WHERE id=${valueString}`);
    }

    /**
    * Forms the delete sql query for deleting records in database.
    * @param {object} entity 
    * @return {sql query} sql query.
    */
    delete(entity) {
        let valueString = "'" + entity['id'] + "'";
        return (`DELETE FROM ${entity.tableName} WHERE id=(${valueString})`);
    }

    /**
     * Forms the select sql query for fetching all records from database.
     * @param {object} entity 
     * @return {sql query} sql query.
     */
    list(entity) {
        return (`SELECT * FROM ${entity.tableName}`);
    }
}