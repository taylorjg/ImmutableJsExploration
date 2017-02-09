const Immutable = require('immutable');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');

const assert = chai.assert;
const List = Immutable.List;

chai.use(chaiImmutable);

describe('List', () => {
    it('first basic test', function () {
        assert.equal(List.of(1, 2, 3), List.of(1, 2, 3));
    });
});
