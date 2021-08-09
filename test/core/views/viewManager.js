require('/home/eiman.waheed/Desktop/mvc-node/config.js');
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const viewManager = autoload('viewManager');
const fs = require('fs');

const actualData = viewManager.loadView('student', 'create').getContent();
const expectedData = fs.readFileSync(`${process.env.FILEPATH}/app/views/student/create.html`, 'utf-8');

QUnit.module("View Manager");
QUnit.test('Load correct views', function (assert) {
    assert.equal(actualData, expectedData);
});
QUnit.test('Exception views', function (assert) {
    assert.throws(function () {
        viewManager.loadView('student', 'hello');
    });
});
