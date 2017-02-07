var Immutable = require('immutable');
var assert = require('assert');

describe('Map', () => {
    it('first example from the getting started documentation', function () {
        var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
        var map2 = map1.set('b', 50);
        assert.equal(map1.get('b'), 2);
        assert.equal(map2.get('b'), 50);
    });
});
