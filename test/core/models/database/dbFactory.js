require('/home/eiman.waheed/Desktop/mvc-node/config.js');
const sinon = require('sinon');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const driverFactory = new autoload('driver');
QUnit.module("Database Factory", function (hooks) {
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
        const actualObject = autoload('dbFactory').loadDriver();
        const expectedObject = { "connection": {} };
        assert.deepEqual(actualObject, expectedObject);
    });
    QUnit.test('Exception Test case', function (assert) {
        instanceStub.throws(Error);
        assert.throws(function () {
            autoload('dbFactory').loadDriver();
        });
    });

    /** QueryBuilder test case */
    QUnit.test('QueryBuilder Test case ', function (assert) {
        const actualObject = autoload('dbFactory').loadQueryBuilder();
        console.log(actualObject);
        const expectedObject = { "connection": {} };
        assert.deepEqual(actualObject, expectedObject);
    });
});