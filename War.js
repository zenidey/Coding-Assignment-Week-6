// Consider classes such as Card, Deck, and Player and what fields and methods they might each have
// Deal 26 Cards to two Players from a Deck. 
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

const suits = ["diamond", "spade", "heart", "club"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}


class Deck{
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
        this.deck = [];
    }

    createDeck(){
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.value.length; j++) {
                let card = { suit: this.suit[i], value: this.value[j], rank: this.rank[j] };
                this.deck.push(card);
            }
        }
        return this.deck;
    }

    shuffle(){ 
        for (let i = this.deck.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.deck[newIndex];
            this.deck[newIndex] = this.deck[i];
            this.deck[i] = oldValue;
        }
    }

    deal(){  
        const halfDeck = (this.deck.length / 2);
        player1Hand = (this.deck.slice(0, halfDeck));
        player2Hand = (this.deck.slice(halfDeck, this.deck.length));
    }

    describe(){
        console.log("Number of cards in deck: " + this.deck.length);
    }
}


class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    newHand(cards){
        this.hand = cards;
    }

    describe(){
        console.log(this.name + " has " + this.hand.length + " cards in her hand.");
    }

}


function compareCards(player1, player2){
    for(let i = 0; i < player1Hand.length; i++){
        if(player1.hand[i].rank > player2.hand[i].rank){
            console.log(`Add a point to Player1`);
            player1.score++;
        } else if(player1.hand[i].rank < player2.hand[i].rank){
            console.log(`Add a point to Player2`);
            player2.score++;
        } else {
            console.log(`We have a tie, 0 points`);
        }
    }
}



let player1Hand = [];
let player2Hand = [];

let myWarDeck = new Deck(suits, values, rank);
myWarDeck.createDeck();
myWarDeck.shuffle();
myWarDeck.deal();

let player1 = new Player("Zen");
let player2 = new Player("Syd");
player1.newHand(player1Hand);
player2.newHand(player2Hand);


compareCards(player1, player2);
console.log("Zen has " + player1.score);
console.log("Syd has " + player2.score);



