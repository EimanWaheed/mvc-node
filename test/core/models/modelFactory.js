require('/home/eiman.waheed/Desktop/mvc-node/config.js');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

QUnit.module("Model Factory", function (assert) {
    const actualObject = autoload('modelFactory').createModel('student');
    const expectedObject = new (require(`${process.env.FILEPATH}/app/models/student.js`))
    QUnit.test('correct controller', function (assert) {
        assert.deepEqual(actualObject, expectedObject);
    });
    QUnit.test('Exception controller', function (assert) {
        assert.throws(function () {
            autoload('controllerFactory').createController('books');
        });
    });
});