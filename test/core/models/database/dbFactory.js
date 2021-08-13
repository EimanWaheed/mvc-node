const sinon = require('sinon');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
QUnit.module("Database Factory", function (hooks) {
    const driverFactory = new autoload('driver');
    let instanceStub = "";
    /** Set up after each test. */
    hooks.beforeEach(function (assert) {
        instanceStub = sinon.stub(driverFactory, 'getInstance').returns({
            "connection": {}
        });
    });
    /** Clean up after each test. */
    hooks.afterEach(function (assert) {
        instanceStub.restore();
    });

    /** Driver test case */
    QUnit.test('Driver Test case ', function (assert) {
        const actualObject = (new (autoload('dbFactory'))).loadDriver();
        const expectedObject = { "connection": {} };
        assert.deepEqual(actualObject, expectedObject);
    });
    QUnit.test('Exception Test case', function (assert) {
        process.env.DBNAME = 'mongoDB';
        assert.throws(function () {
            (new (autoload('dbFactory'))).loadDriver();
        });
    });

    /** QueryBuilder test case */
    QUnit.test('QueryBuilder Test case ', function (assert) {
        process.env.DBNAME = "mysqli";
        const actualObject = (new (autoload('dbFactory'))).loadQueryBuilder();
        const expectedObject = new (require(`${process.env.FILEPATH}/core/models/database/driver/mysqli/queryBuilder`));
        assert.deepEqual(actualObject, expectedObject);
    });
    QUnit.test('Exception Test case', function (assert) {
        process.env.DBNAME = 'mongoDB';
        assert.throws(function () {
            (new (autoload('dbFactory'))).loadQueryBuilder();
        });
    });
});