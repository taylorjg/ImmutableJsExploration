const Immutable = require('immutable');
const chai = require('chai');
const chaiImmutable = require('chai-immutable');

const assert = chai.assert;
const List = Immutable.List;

chai.use(chaiImmutable);

describe('Misc', function () {
    it('fromJS', function () {
        const jsonString = JSON.stringify({
            "board": "XX-O--O--",
            "player1Piece": "X",
            "player2Piece": "O"
        });
        const request = Immutable.fromJS(JSON.parse(jsonString));
        assert.equal(request.get("board"), "XX-O--O--");
        assert.equal(request.get("player1Piece"), "X");
        assert.equal(request.get("player2Piece"), "O");
    });

    it('toJS', function () {
        const jsonString = JSON.stringify({
            "board": "XX-O--O--",
            "player1Piece": "X",
            "player2Piece": "O"
        });
        const request = Immutable.fromJS(JSON.parse(jsonString));
        const outcome = {
            board: "XX-OO-O--",
            outcome: 1,
            winningLine: [0, 1, 2]
        };
        const response = request.merge(outcome);
        assert.equal(response.get("board"), "XX-OO-O--");
        assert.equal(response.get("player1Piece"), request.get("player1Piece"));
        assert.equal(response.get("player2Piece"), request.get("player2Piece"));
        assert.equal(response.get("outcome"), 1);
        assert.equal(response.get("winningLine"), List([0, 1, 2]));
    });

    it('update string', function () {
        const board1 = "XX-O--O--";
        const board2 = List(board1).set(4, "O").join("");
        assert.equal(board2, "XX-OO-O--");
    });
});
