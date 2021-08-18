const autoload = require(`${process.env.FILEPATH}/core/autoload.js`).getInstance();

QUnit.module("View Manager", function (assert) {
    const viewManager = (new (autoload.getFileName('viewManager')));
    const fs = require('fs');
    const actualData = viewManager.loadView('student', 'create').getContent();
    const expectedData = fs.readFileSync(`${process.env.FILEPATH}/app/views/student/create.html`, 'utf-8');
    /** View Manager success case */
    QUnit.test('Load correct views', function (assert) {
        assert.equal(actualData, expectedData);
    });
    /** View Manager exception case */
    QUnit.test('Exception views', function (assert) {
        assert.throws(function () {
            viewManager.loadView('student', 'hello');
        });
    });
});