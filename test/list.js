const Immutable = require('immutable');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');
const assert = chai.assert;
chai.use(chaiImmutable);

describe('List', () => {
    it('first basic test', function () {
        assert.equal(Immutable.List.of(1, 2, 3), Immutable.List.of(1, 2, 3));
    });
});
