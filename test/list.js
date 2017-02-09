const Immutable = require('immutable');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');

const assert = chai.assert;
const List = Immutable.List;

chai.use(chaiImmutable);

describe('List', function () {
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

    it('get', function () {
        const list1 = List([1, 2, 3]);
        assert.equal(list1.get(0), 1);
        assert.equal(list1.get(1), 2);
        assert.equal(list1.get(2), 3);
    });

    it('set', function () {
        const list1 = List([1, 2, 3]);
        const list2 = list1.set(0, 99);
        assert.equal(list1, List([1, 2, 3]));
        assert.equal(list2, List([99, 2, 3]));
    });

    it('insert', function () {
        const list1 = List([1, 2, 3]);
        const list2 = list1.insert(1, 99);
        assert.equal(list1, List([1, 2, 3]));
        assert.equal(list2, List([1, 99, 2, 3]));
    });

    it('update', function () {
        const list1 = List([1, 2, 3]);
    });

    it('merge list and list', function () {
        const list1 = List([1, 2, 3]);
        const list2 = List([4, 5, 6]);
        assert.equal(list1.merge(list2), List.of(4, 5, 6));
        assert.equal(list2.merge(list1), List.of(1, 2, 3));
    });

    it('merge list and array', function () {
        const list1 = List([1, 2, 3]);
        const array1 = [4, 5, 6];
        assert.equal(list1.merge(array1), List.of(4, 5, 6));
    });

    it('keys', function () {
        const list1 = List([1, 2, 3]);
        const keys = List(list1.keys());
        assert.equal(keys, List.of(0, 1, 2));
    });

    it('values', function () {
        const list1 = List([1, 2, 3]);
        const values = List(list1.values());
        assert.equal(values, List.of(1, 2, 3));
    });
});
