const sinon = require('sinon');
require('/home/eiman.waheed/Desktop/mvc-node/config.js');
const crudModel = new (require('/home/eiman.waheed/Desktop/mvc-node/core/models/crudModel.js'));
const request = require('/home/eiman.waheed/Desktop/mvc-node/core/request.js').getInstance();
const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
const modelFactory = autoload('modelFactory');
const viewManager = autoload('viewManager');
QUnit.module("Rest Controller");
const restController = new (require('/home/eiman.waheed/Desktop/mvc-node/core/controllers/restController.js'));
//sinon.stub(request.prototype, 'getInstance').returns(true);

QUnit.test("Correct create", assert => {
    sinon.stub(request, 'getParams').returns({
        obj: {
            "id": 5,
            "name": 'Eiman Waheed',
            "email": 'eiman@com',
            "password": 1234
        }
    });
    
    sinon.stub(modelFactory, 'createModel').returns(true);
    sinon.stub(crudModel, 'create').returns(true);
    sinon.stub(viewManager, 'loadView').returns(true);
    
    
    const result = restController.create('student', 'create');
    
    assert.equal(result, "true");
});