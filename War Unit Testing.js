var expect = chai.expect;       // imports 

describe("MyFunctions", function() {
 

    describe('players', function () {
        it('assigns a name', function () {
            let player1 = new Player("Zen");
            expect(player1.name).to.equal('Zen');
        });
        it('assigns a hand', function () {
            let zen = new Player("Zen");
            const cards = 'test';
            expect(Array.isArray(player1.hand)).to.be.true;
            expect(player1.hand).to.have.length(26);
            // expect(zen.hand).to.deep.equal([]);
            player1.newHand(cards);
            expect(player1.hand).equals('test');
        });
    });
});