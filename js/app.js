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
        this.playerWar = [];
        this.computerCards = [];
        this.computerWar = [];
        
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
    
    // this whill split the deck and push them into two arrays for the computer and player
    split() {
        this.playerCards = this.deck.splice(0, 26);
        this.computerCards = this.deck.splice(0)
    };

    //this will compare the first card in the array of player and computer whoever has the higher, both cards will be pushed to the end of the winners array 
    compare(){
        const comp1 = this.checkVal(this.computerCards[0].value);
        const play1 = this.checkVal(this.playerCards[0].value);
       
    //  this will check is the computers is the winner
        if (play1 < comp1) {
            const computerCard = this.computerCards.shift()
            const playerCard = this.playerCards.shift()
            console.log("computer wins this round");
            this.computerCards.push(computerCard, playerCard);
            console.log(this.playerCards[0].value);
            console.log(this.computerCards[0].value);
         } 

         //this will check if the player is the winner
         else if (comp1 < play1) {
            const computerCard = this.computerCards.shift()
            const playerCard = this.playerCards.shift()
            console.log("player wins this round")
            this.playerCards.push(computerCard,playerCard)
            console.log(this.playerCards[0].value);
            console.log(this.computerCards[0].value);
         }  
         // this will check to see if the computer and player have the same card and begin war then push the all cards played in this round to the winners deck.         
        else if ((play1) === (comp1)){
            console.log("War");
            this.playerWar.push(this.playerCards.splice(1,4));
            this.computerWar.push(this.computerCards.splice(1,4));
            const compWar1 = this.computerWar[0][3].value;
            const playWar1 = this.playerWar[0][3].value;
            if (playWar1 < compWar1){
                const computerCard = this.computerCards.shift()
                const playerCard = this.playerCards.shift()
                this.computerCards.push(computerCard, playerCard);
                this.computerCards.push(this.playerWar.splice(0,3)[0]);
                this.playerCards.push(this.computerWar.splice(0,3)[0]);
                console.log("Computer Wins");
            }
            else if(compWar1 < playWar1) {
                const computerCard = this.computerCards.shift()
                const playerCard = this.playerCards.shift()
                this.playerCards.push(computerCard, playerCard);
                this.playerCards.push(this.playerWar.splice(0,3)[0]);
                this.computerCards.push(this.computerWar.splice(0,3)[0]);
                console.log("Player Wins"); 
            }

           
        }
        console.log(this.playerCards);
        console.log(this.computerCards);
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

// this will begin the game functions 
const gameInit = () =>{
    $('.info').fadeOut("slow")
    deck = new Deck;
    deck.buildDeck(suits, faces);
    deck.shuffle();
    deck.split();
    $(".pDeck").append('<img src="css/images/card back image.png" width="70" height="90">');
    $(".cDeck").append('<img src="css/images/card back image.png" width="70" height="90">');
    console.log(deck.playerCards);
    console.log(deck.playerCards[0].value);
    console.log(deck.computerCards);
    console.log(deck.computerCards[0].value); 

}

const battle = () => {
    deck.compare()
}

//Buttons
// this start the game 
$('.newGame').on('click', gameInit)



$('.deal').on('click', battle)