require('../../../config.js');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);

QUnit.module("Controller Factory", function (assert) {
    const actualObject = (new (autoload('controllerFactory'))).createController('student');
    const expectedObject = new (require(`${process.env.FILEPATH}/app/controllers/studentController.js`));
    /** Controller Factory success case */
    QUnit.test('correct controller', function (assert) {
        assert.deepEqual(actualObject, expectedObject);
    });
    /** Controller Factory exception case */
    QUnit.test('Exception controller', function (assert) {
        assert.throws(function () {
            (new (autoload('controllerFactory'))).createController('books');
        });
    });
});