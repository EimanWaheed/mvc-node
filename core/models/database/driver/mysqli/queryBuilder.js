/**
 * Class representing CRUD operations which will be responsible for generating 
 * sql queries and returning them for all the CRUD operations i.e, create, delete,
 * list and update. These CRUD operations are performed for the specific entity which
 * has key value pair. After these queries are generated dynamically, they are returned.
 * This class is responsible for generating and building the queries dynamically for
 * the purpose of further executing it.
 */
class QueryBuilder {

    /**
     * Forms the insert sql query for inserting records in database. The query is
     * generated by making the strings of keys and values which are obtained from the
     * entity object which is passed as a parameter in the method. After the insert query
     * is generated then it is returned which will be executed later.
     * @param {Object} entity 
     * @returns {string} the sql query.
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
    * Forms the update sql query for updating records of database. The query is
    * generated by making the strings of keys and values which are obtained from the
    * entity object which is passed as a parameter in the method. After the update query
    * is generated then it is returned which will be executed later.
    * @param {Object} entity 
    * @returns {string} the sql query.
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
    * Forms the delete sql query for deleting records from database based on the id column. 
    * The query is generated by making the strings of keys and values which are obtained 
    * from the entity object which is passed as a parameter in the method. After the delete 
    * query is generated then it is returned which will be executed later.
    * @param {Object} entity 
    * @returns {string} the sql query.
    */
    delete(entity) {
        let valueString = "'" + entity['id'] + "'";
        return (`DELETE FROM ${entity.tableName} WHERE id=(${valueString})`);
    }

    /**
    * Forms the select sql query for fetching all the records from database. 
    * The query is generated by taking the table name which is obtained from the entity object 
    * which is passed as a parameter in the method. After the select query is generated then it 
    * is returned which will be executed later.
    * @param {object} entity 
    * @returns {string} the sql query.
    */
    list(entity) {
        return (`SELECT * FROM ${entity.tableName}`);
    }
}
module.exports = QueryBuilder;