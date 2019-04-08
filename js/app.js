// Createing War card game!
// Steps create variables to contain the arrays for the players cards, computers cards, and war deck. 
// Define variables to contain the Player score, computer score, and the cards each of them draw


//Building a deck of cards 
let suits = ["spades", "diamonds", "clubs", "hearts"];
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


class Cards {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
};
   
class Deck {
    constructor(){
        this.deck = [];
        this.playerCards = [];
        this.computerCards = [];
    }
    buildDeck(suits, faces) { 
        for (let suit of suits){
            for (let value of faces){
                this.deck.push(new Cards(suit, value))
            }
        }
        return this.deck;
    }
    shuffle(){
        let x = this.deck.length, y, z;
        while (x) {
            z = Math.floor(Math.random() * x--);
            y = this.deck[x];
            this.deck[x] = this.deck[z];
            this.deck[z] = y;
        }
        return this.deck;
    };

    split() {
        this.playerCards = this.deck.splice(0, 26);
        this.computerCards = this.deck.splice(0)
    }
    
};
    




gameInit = () =>{
    let deck = new Deck;
    deck.buildDeck(suits, faces);
    deck.shuffle();
    deck.split();
    console.log(deck.playerCards);
    console.log(deck.computerCards) 

}


$('.newGame').on('click', gameInit)

$('.deal').on('click', )