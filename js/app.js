// Createing War card game!
// Steps create variables to contain the arrays for the players cards, computers cards, and war deck. 
// Define variables to contain the Player score, computer score, and the cards each of them draw


//Building a deck of cards 
const suits = ["spades", "diamonds", "clubs", "hearts"];
const faces = ["A", "02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K"];


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
        this.computerCards = this.deck.splice(0);   
    };

    display(){
        let pCard = this.playerCards[0]
        let cCard = this.computerCards[0]
        $('#pDeck').removeClass()
        $('#cDeck').removeClass()
       
        $('#pDeck').toggleClass(`${pCard.suit[0]}${pCard.value} card`)
        $('#cDeck').toggleClass(`${cCard.suit[0]}${cCard.value} card`)              
    }

//this will compare the first card in the array of player and computer whoever has the higher, both cards will be pushed to the end of the winners array 
    compare(){
        const comp1 = this.checkVal(this.computerCards[0].value);
        const play1 = this.checkVal(this.playerCards[0].value);
       
    //  this will check is the computers is the winner
        if (play1 < comp1) {
            const computerCard = this.computerCards.shift()
            const playerCard = this.playerCards.shift()
            $("#round").text("Computer wins this round!")
            this.computerCards.push(computerCard, playerCard);
            
         } 

         //this will check if the player is the winner
         else if (comp1 < play1) {
            const computerCard = this.computerCards.shift()
            const playerCard = this.playerCards.shift()
            $("#round").text("Player wins this round!")
            this.playerCards.push(computerCard,playerCard)
            console.log(this.playerCards[0].value);
            console.log(this.computerCards[0].value);
         }  
         // this will check to see if the computer and player have the same card and begin war then push the all cards played in this round to the winners deck.         
        else if ((play1) === (comp1)){
            $("#round").text("War  ");
            this.playerWar.push(this.playerCards.splice(1,4));
            this.computerWar.push(this.computerCards.splice(1,4));
            const compWar1 = this.computerWar[0][3].value;
            const playWar1 = this.playerWar[0][3].value;
            if (playWar1 < compWar1){
                const computerCard = this.computerCards.shift()
                const playerCard = this.playerCards.shift()
                this.computerCards.push(computerCard, playerCard);
                this.computerCards = [...this.computerCards,...this.playerWar[0]];
                this.playerCards = [...this.playCards,...this.computerWar[0]];
                $('#round').append("Computer Wins");
            }
            else if(compWar1 < playWar1) {
                const computerCard = this.computerCards.shift()
                const playerCard = this.playerCards.shift()
                this.playerCards.push(computerCard, playerCard);
                this.playerCards = [...this.playerWar[0], ...this.playerCards];
                this.computerCards =[...this.computerCards, ...this.computerWar[0]];
                $("#round").text("Player Wins"); 
            }

           
        }
        console.log(this.playerCards);
        this.playerWar = []
        this.computerWar = []
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

     score(){
        const playScore = this.playerCards.length; 
        const compScore = this.computerCards.length;
        console.log(playScore,compScore)
        $('.score').text(playScore,compScore)

     }
     win(){
        const playWin = this.playerCards.length;
        const compWin = this.computerCards.length; 
        if(playWin === 0){
            alert("Computer has won WAR! yould you like to play again")
         }else if(compWin === 0){
            alert("You won WAR! yould you like to play again")
         } 
     }
};


let deck;

// this will begin the game functions 
const gameInit = () =>{
    $('.rules-container').fadeOut("slow")
    deck = new Deck;
    deck.buildDeck(suits, faces);
    deck.shuffle();
    deck.split();
    deck.display();
    deck.score()
    deck.win()
    console.log(deck.playerCards);
    console.log(deck.playerCards[0].value);
    console.log(deck.computerCards);
    console.log(deck.computerCards[0].value); 

    // var gameContainerDOM = document.querySelector('.gameContainer')
    
    // gameContainerDOM.style.display = 'block'

    // var diceDOM = document.querySelector('.dice')

}

const battle = () => {
    deck.display();
    deck.compare()
    deck.score()
    deck.win() 
}

//Buttons
// this start the game 
$('#play-btn').on('click', gameInit)



$('.deal').on('click', battle)