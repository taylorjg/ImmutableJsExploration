const Immutable = require('immutable');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');

const assert = chai.assert;
const List = Immutable.List;

chai.use(chaiImmutable);

describe('List', () => {
    it('construction', function () {
        const expected = List.of(1, 2, 3);
        assert.equal(List.of(1, 2, 3), expected);
        assert.equal(List([1, 2, 3]), expected);
        assert.equal(List({
            length: 3,
            0: 1,
            1: 2,
            2: 3
        }), expected);
        assert.equal(Immutable.fromJS([1, 2, 3]), expected);
    });

    it('shift/unshift', function () {
        const list1 = List([1, 2, 3]);
        assert.equal(list1.unshift(0), List([0, 1, 2, 3]));
        assert.equal(list1.shift(0), List([2, 3]));
    });

    it('pop/push', function () {
        const list1 = List([1, 2, 3]);
        assert.equal(list1.pop(), List([1, 2]));
        assert.equal(list1.push(4), List([1, 2, 3, 4]));
    });
});
