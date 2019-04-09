// Createing War card game!
// Steps create variables to contain the arrays for the players cards, computers cards, and war deck. 
// Define variables to contain the Player score, computer score, and the cards each of them draw


//Building a deck of cards 
const suits = ["spades", "diamonds", "clubs", "hearts"];
const faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


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
        this.playerHand = [];
        this.computerCards = [];
        this.computerHand = []
        
    }
    // this build a deck once the user clicks new game 
    buildDeck(suits, faces) { 
        for (let suit of suits){
            for (let value of faces){
                this.deck.push(new Cards(suit, value));
            }
        }
        return this.deck;
    }
    // this will shuffle the deck 
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
    };

    compare(){
        const comp1 = this.checkVal(this.computerCards[0].value);
        const play1 = this.checkVal(this.playerCards[0].value);
     
        if ((play1 % 13) < (comp1 % 13)) {
            console.log("computer wins this round");
            this.computerCards.push(this.computerCards.shift([0]));
            this.computerCards.push(this.playerCards.splice(0,1).shift(this.playerCards[0]));
            
            console.log(this.playerCards, deck.playerCards[0].value);
            console.log(this.computerCards, deck.computerCards[0].value);
         } 
         else if ((comp1 % 13) < (play1 % 13)) {
            console.log("player wins this round")
            this.playerCards.push(this.playerCards.shift([0]))
            this.playerCards.push( this.computerCards.splice(0,1).shift(this.computerCards[0]));
            console.log(this.playerCards, deck.playerCards[0].value);
            console.log(this.computerCards, deck.computerCards[0].value);  
        }           
        else if ((comp1 % 13) === (play1 % 13)){
            console.log("War");
            this.playerCards.push()
        }
     }

     checkVal(val) {
         if(val === "J") {
             return 11
         } else if (val === "Q") {
             return 12
         } else if (val === "K") {
             return 13
         } else if (val === "A") {
             return 14
         } else {
             return (val)
         }
     }
};
    

let deck;
const warArr = [];

const war = () => {
    
}

const gameInit = () =>{
    deck = new Deck;
    deck.buildDeck(suits, faces);
    deck.shuffle();
    deck.split();
    console.log(deck.playerCards);
    console.log(deck.playerCards[0].value);
    console.log(deck.computerCards);
    console.log(deck.computerCards[0].value); 

}

const battle = () => {
    deck.compare()
}

//Buttons
$('.newGame').on('click', gameInit)

$('.deal').on('click', battle)