/* Main Function Layout
encapsulate variables
Declare Variables for arguments
Num of players and hands
Shuffle
Deal
PlayCard
Compare Values
Take Book       */

const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "0A", "0B", "0C", "0D", "0E"];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
class Deck {
    constructor(cards = this.createDeck()) {
        this.cards = cards;
    }

    createDeck() {
        return suits.flatMap(suit => {
            return values.map(value => {
            return new Card(suit, value);
            });
        });
    }

    Shuffle() {
        //Rearrange order of the cards (Random)
        //Rearrange order of entire deck, not suit by suit
        for (let i = deck.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const X = deck.cards[i];
            deck.cards[i] = deck.cards[j];
            deck.cards[j] = X;
        }
        console.log(Deck);
    }
    
    Deal(p1Hand, p2Hand, p3Hand, p4Hand) {              
        for (let i = 0; i < deck.cards.length / 4; i++) {
            p1Hand[i] = deck.cards[i];
        }
        for (let i = deck.cards.length / 4; i < deck.cards.length / 2; i++) {
            p2Hand[i] = deck.cards[i];
            p2Hand = p2Hand.filter(function (el) {
                return el != null;
            });
        }
        for (let i = deck.cards.length / 2; i < ((deck.cards.length / 2) + (deck.cards.length / 4)); i++) {
            p3Hand[i] = deck.cards[i];
            p3Hand = p3Hand.filter(function (el) {
                return el != null;
            });
        }
        for (let i = ((deck.cards.length / 2) + (deck.cards.length / 4)); i < deck.cards.length; i++) {
            p4Hand[i] = deck.cards[i];
            p4Hand = p4Hand.filter(function (el) {
                return el != null;
            });
        }
        console.log(p1Hand);
        console.log(p2Hand);
        console.log(p3Hand);
        console.log(p4Hand);
    }
}

class Game{
    constructor(){
        this.playCount = 0;
        this.numbOfBooks = 0;
        this.table = [];
        this.deck = new Deck();
        }
}

class Player{
    constructor(){
        this.hand = [];
        this.books = 0;
    }
}


    function main(){
        const newGame = new Game();
        const Player1 = new Player();
        const Player2 = new Player();
        const Player3 = new Player();
        const Player4 = new Player();
        Deal(Player1.hand, Player2.hand, Player3.hand, Player4.hand);
        
        
    }    
    
    const newGame = new Game();
    console.log(newGame.deck);   