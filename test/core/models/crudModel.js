const sinon = require('sinon');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();

QUnit.module("CRUD Model", function (hooks) {
    const crudModel = new (autoload.getFileName('crudModel'));
    let entityStub = "", driverStub = "", querybuilderStub = "";
    const paramsObj = {
        "id": 5,
        "name": 'Eiman Waheed',
        "email": 'eiman@com',
        "password": 1234
    };
    /** Set up after each test. */
    hooks.beforeEach(function (assert) {
        entityStub = sinon.stub(crudModel, 'getEntity').returns({
            setEntity: () => { return true }
        });
        driverStub = sinon.stub(crudModel, 'getDriver').returns({
            runQuery: () => { return true }
        });
        querybuilderStub = sinon.stub(crudModel, 'getQueryBuilder').returns({
            create: () => { return true },
            delete: () => { return true },
            update: () => { return true },
            list: () => { return true }
        });
    });
    /** Clean up after each test. */
    hooks.afterEach(function (assert) {
        entityStub.restore();
        driverStub.restore();
        querybuilderStub.restore();
    });

    /** Create test cases. */
    QUnit.test("Create Test A for if statement", function (assert) {
        const result = crudModel.create(paramsObj);
        assert.equal(result, true);
    });
    QUnit.test("Create Test B for Exception", function (assert) {
        driverStub.throws(Error);
        assert.throws(function () {
            crudModel.create(paramsObj);;
        });
    });

    /** Update test cases */
    QUnit.test("Update Test A for if statement", function (assert) {
        const result = crudModel.update(paramsObj);
        assert.equal(result, true);
    });
    QUnit.test("Update Test B for Exception", function (assert) {
        driverStub.throws(Error);
        assert.throws(function () {
            crudModel.update(paramsObj);;
        });
    });

    /** Delete test cases */
    QUnit.test("Delete Test A for if statement", function (assert) {
        const result = crudModel.delete(paramsObj);
        assert.equal(result, true);
    });
    QUnit.test("Delete Test B for Exception", function (assert) {
        driverStub.throws(Error);
        assert.throws(function () {
            crudModel.delete(paramsObj);;
        });
    });

    /** List test cases */
    QUnit.test("List Test A for if statement", function (assert) {
        const result = crudModel.list(paramsObj);
        assert.equal(result, true);
    });
    QUnit.test("List Test B for Exception", function (assert) {
        driverStub.throws(Error);
        assert.throws(function () {
            crudModel.list(paramsObj);;
        });
    });
});