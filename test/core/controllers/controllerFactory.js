require('/home/eiman.waheed/Desktop/mvc-node/config.js');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

QUnit.module("Controller Factory", function (assert) {
    const actualObject = autoload('controllerFactory').createController('student');
    const expectedObject = new (require(`${process.env.FILEPATH}/app/controllers/studentController.js`));
    QUnit.test('correct controller', function (assert) {
        assert.deepEqual(actualObject, expectedObject);
    });
    QUnit.test('Exception controller', function (assert) {
        assert.throws(function () {
            autoload('controllerFactory').createController('books');
        });
    });
});