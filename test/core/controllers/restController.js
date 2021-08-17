const sinon = require('sinon');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();
const request = autoload.getFileName('request').getInstance();
const restController = new (autoload.getFileName('restController'));

QUnit.module("Rest Controller", function (hooks) {
    let paramsStub = "", modelStub = "", viewStub = "";
    /** Set up after each test. */
    hooks.beforeEach(function (assert) {
        paramsStub = sinon.stub(request, 'getParams');
        modelStub = sinon.stub(restController, 'getModel');
        viewStub = sinon.stub(restController, 'getView');
    });
    /** Clean up after each test. */
    hooks.afterEach(function (assert) {
        paramsStub.restore();
        modelStub.restore();
        viewStub.restore();
    });

    /** Create Test cases. */
    QUnit.test("Create Test A", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.returns({
            create: () => { return true },
            delete: () => { return true },
            update: () => { return true },
            list: () => { return true }
        });
        viewStub.returns(true);
        const result = restController.create('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Create Test B", function (assert) {
        paramsStub.returns({});
        viewStub.returns(true);
        const result = restController.create('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Create Test C for Exception", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.throws(Error);
        assert.throws(function () {
            restController.create('student', 'hello');;
        });
    });

    /** Update test cases */
    QUnit.test("Update Test A", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.returns({
            create: () => { return true },
            delete: () => { return true },
            update: () => { return true },
            list: () => { return true }
        });
        viewStub.returns(true);
        const result = restController.update('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Update Test B", function (assert) {
        paramsStub.returns({});
        viewStub.returns(true);
        const result = restController.update('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Update Test C for Exception", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.throws(Error);
        assert.throws(function () {
            restController.update('student', 'hello');;
        });
    });
    /** List test cases */
    QUnit.test("List Test A", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.returns({
            create: () => { return true },
            delete: () => { return true },
            update: () => { return true },
            list: () => { return true }
        });
        viewStub.returns(true);
        const result = restController.list('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("List Test B for Exception", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.throws(Error);
        assert.throws(function () {
            restController.list('student', 'hello');;
        });
    });
    /** Delete test case */
    QUnit.test("Delete Test A", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.returns({
            create: () => { return true },
            delete: () => { return true },
            update: () => { return true },
            list: () => { return true }
        });
        viewStub.returns(true);
        const result = restController.delete('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Delete Test B", function (assert) {
        paramsStub.returns({});
        viewStub.returns(true);
        const result = restController.delete('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Delete Test C for Exception", function (assert) {
        paramsStub.returns({
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        });
        modelStub.throws(Error);
        assert.throws(function () {
            restController.delete('student', 'hello');;
        });
    });
    /** Default test case */
    QUnit.test("Default Test A", function (assert) {
        viewStub.returns(true);
        const result = restController.defaultView('student', 'create');
        assert.equal(result, true);
    });
    QUnit.test("Default Test B for Exception", function (assert) {
        viewStub.throws(Error);
        assert.throws(function () {
            restController.defaultView('student', 'hello');;
        });
    });
});