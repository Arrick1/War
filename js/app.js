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
        $("#pDeck").attr("src","css/images/card back image.png")
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
            this.computerCards.push(computerCard, playerCard)
         } 

         //this will check if the player is the winner
         else if (comp1 < play1) {
            const computerCard = this.computerCards.shift()
            const playerCard = this.playerCards.shift()
            console.log("player wins this round")
            this.playerCards.push(computerCard,playerCard)
         }  
         // this will check to see if the computer and player have the same card and begin war         
        else if ((play1) === (comp1)){
            console.log("War");

            const playWar = this.checkVal(deck.playerCards[3].value)
            const compWar = this.checkVal(deck.computerCards[3].value)
            console.log(this.checkVal(deck.computerCards[3].value))
            if (playWar == compWar){
                console.log(playWar,compWar)
                // this.computerCards.push(this.playerCards.splice(1,4));

            }
        
            // this.playerWar.push(this.playerCards.splice(1,4));
            // this.computerWar.push(this.computerCards.splice(1,4));
            

            // console.log(this.playerWar, this.computerWar);
        }

        // console.log(this.playerCards[0].value);
        // console.log(this.computerCards[0].value);
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
     
        // if (playWar < compWar){
        //     const compWin = this.compWar.splice(0,3)
        //     const playWin = this.playWar.splice(0,3)
        //     this.computerCards.push(compWin, playWin)

        // }
        // else if (compWar < playWar){
        //     const computerCard = this.computerCards.shift()
        //     const playerCard = this.playerCards.shift()

        // } 
         
         
    //  }
};

    

let deck;

const gameInit = () =>{
    $('.info').fadeOut("slow")
    deck = new Deck;
    deck.buildDeck(suits, faces);
    // deck.shuffle();
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



// $('.deal').on('click', battle)