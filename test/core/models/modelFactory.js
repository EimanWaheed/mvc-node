const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();

QUnit.module("Model Factory", function (assert) {
    const modelFactory = autoload.getFileName('modelFactory');
    const actualObject = (new (autoload.getFileName('modelFactory'))).createModel('student');
    const expectedObject = new (require(`${process.env.FILEPATH}/app/models/student.js`))
    /** Model Factory success case */
    QUnit.test('correct controller', function (assert) {
        assert.deepEqual(actualObject, expectedObject);
    });
    /** Model Factory exception case */
    QUnit.test('Exception controller', function (assert) {
        assert.throws(function () {
            (new (autoload.getFileName('modelFactory'))).createModel('books');
        });
    });
});