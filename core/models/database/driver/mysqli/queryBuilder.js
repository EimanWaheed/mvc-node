const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

module.exports = class QueryBuilder {
    create(entity) {
        console.log("querybuilder create() called");
        const params = autoload('request').getInstance().getParams();
        let valueString = "";
        for (const [key, value] of Object.entries(params)) {
            if (value != params[Object.keys(params).pop()]) {
                valueString += "'" + value + "'" + ',';
            } else {
                valueString += "'" + value + "'";
            }
        }
        console.log(valueString);

        let keyString = "";
        for (const [key, value] of Object.entries(entity)) {
            if (Object.keys(entity)[0] != key) {
                if (value != params[Object.keys(params).pop()]) {
                    keyString += key + ',';
                } else {
                    keyString += key;
                }
            }
        }
        console.log(keyString);

        return (`INSERT INTO ${entity.tableName} (${keyString}) VALUES (${valueString})`);

    }
    update(entity) {

        console.log("querybuilder update() called");
        console.log("querybuilder delete() called");
        const params = autoload('request').getInstance().getParams();
        let valueString = "";
        for (const [key, value] of Object.entries(params)) {
            if (value != params[Object.keys(params).pop()]) {
                valueString += "'" + value + "'" + ',';
            } else {
                valueString += "'" + value + "'";
            }
        }
        console.log(valueString);

        let keyString = "";
        let i = 0;
        for (const [key, value] of Object.entries(entity)) {
            if (Object.keys(entity)[0] != key) {
                if (value != params[Object.keys(params).pop()]) {
                    keyString += key + '=' + Object.entries(params)[i] + ',';
                } else {
                    keyString += key + '=' + Object.entries(params)[i];
                }
                i++;
            }
        }
        console.log(keyString);


        return (`UPDATE ${entity.tableName} SET ${keyString} WHERE id=(${valueString})`);


    }
    delete(entity) {
        console.log("querybuilder delete() called");
        const params = autoload('request').getInstance().getParams();
        let valueString = "";
        for (const [key, value] of Object.entries(params)) {
            valueString += "'" + value + "'";
        }
        return (`DELETE FROM ${entity.tableName} WHERE id=(${valueString})`);
    }
    list(entity) {

        console.log("querybuilder list() called");
    }
}