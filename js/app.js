// Createing War card game!
// Steps create variables to contain the arrays for the players cards, computers cards, and war deck. 
// Define variables to contain the Player score, computer score, and the cards each of them draw


//Building a deck of cards 
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Cards {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
};
   
class Deck {
    constructor(){
        this.deck = [];
    }
    buildDeck(suits, values) { 
        for (let suit of suits){
            for (let value of values){
                this.deck.push(new Cards(suit, value))
            }
        }
        return this.deck;
    }
    
};


let deck = new Deck;
deck.buildDeck(suits, values);
console.log(deck)
