const autoload = require(`${process.env.FILEPATH}/core/autoload.js`);
QUnit.module("QueryBuilder", function (assert) {
    const queryBuilder = new (autoload('queryBuilder'));
    const studentMetaData = {
        tableName: 'student',
        id: 1,
        name: 'eiman waheed',
        password: 'hehehe',
        email: 'eiman@com'
    }
    /** QueryBuilder create case */
    QUnit.test('Create Test A', function (assert) {
        const actualObject = queryBuilder.create(studentMetaData);
        const expectedObject = `INSERT INTO student (name,password,email) VALUES ('eiman waheed','hehehe','eiman@com')`;
        assert.equal(actualObject, expectedObject);
    });
    /** QueryBuilder update case */
    QUnit.test('Update Test A', function (assert) {
        const actualObject = queryBuilder.update(studentMetaData);
        const expectedObject = `UPDATE student SET id='1',name='eiman waheed',password='hehehe',email='eiman@com' WHERE id='1'`;
        assert.equal(actualObject, expectedObject);
    });
    /** QueryBuilder list case */
    QUnit.test('List Test A', function (assert) {
        const actualObject = queryBuilder.list(studentMetaData);
        const expectedObject = `SELECT * FROM student`;
        assert.equal(actualObject, expectedObject);
    });
    /** QueryBuilder delete case */
    QUnit.test('Delete Test A', function (assert) {
        const actualObject = queryBuilder.delete(studentMetaData);
        const expectedObject = `DELETE FROM student WHERE id=('1')`;
        assert.equal(actualObject, expectedObject);
    });
});