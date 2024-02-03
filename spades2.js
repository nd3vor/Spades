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

    Shuffle(deck) {
        //Rearrange order of the cards (Random)
        //Rearrange order of entire deck, not suit by suit
        for (let i = deck.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const X = deck.cards[i];
            deck.cards[i] = deck.cards[j];
            deck.cards[j] = X;
        }
        console.log(deck);
    }
    
    Deal(deck, p1Hand, p2Hand, p3Hand, p4Hand) {              
        for(let i = 0; i < 13; i++){
            p1Hand[i] = deck.cards.shift();
            p2Hand[i] = deck.cards.shift();
            p3Hand[i] = deck.cards.shift();
            p4Hand[i] = deck.cards.shift();
        }
        console.log(p1Hand);
        console.log(p2Hand);
        console.log(p3Hand);
        console.log(p4Hand);
    }
}

class Player{
    constructor(){
        this.hand = [];
        this.books = 0;
    }

    playCard(playerHand, table) {
        if (playerHand.length === 0) {
            console.log("Out of Cards");
            return;
        }
    
        console.log(`Player ${currentPlayer}'s Hand:`);
        for (let i = 0; i < playerHand.length; i++) {
            const card = playerHand[i];
            console.log(`${i}: ${card.value} of ${card.suit}`);
        }
    
        while (true) {
            const cardIndexPrompt = prompt(`Player ${currentPlayer}, enter the index of the card to play: `);
            const cardIndex = parseInt(cardIndexPrompt);
    
            if (cardIndex >= 0 && cardIndex < playerHand.length) {
                const cardPlayed = playerHand.splice(cardIndex, 1)[0];
                table.push(cardPlayed);
                console.log(`Player ${currentPlayer} played ${cardPlayed.value} of ${cardPlayed.suit}`);
                break;
            }
    
            console.log("Invalid input. Try again.");
        }
    }

    takeBook(index, numbOfBooks, Player1, Player2, Player3, Player4){
        numbOfBooks++;           
        switch(index){
            case 0:
                Player1.books = Player1.books + 1;                      
                break;
            case 1:
                Player2.books = Player2.books + 1;                        
                break;
            case 2:
                Player3.books = Player3.books + 1;                      
                break;
            case 3:
                Player4.books = Player4.books + 1;
                break; 
        }
        if (numbOfBooks === 13) {
            let playerBooks = [Player1.books, Player2.books, Player3.books, Player4.books]
            getHighScoreIndex(playerBooks);
        }
    }
}

class Game{
    constructor(){
        this.playCount = 0;
        this.numbOfBooks = 0;
        this.table = [];
        this.deck = new Deck();
        }
    
    setStartingPlayer(startingIndex) {
        index = startingIndex 
        for (i = 0; i < 4; i++) {
            index = (index + 1) % 4
        }
    
    }
    getHighScoreIndex(playerScores){
        let highScoreIndex = 0;
        for (let i = 1; i < playerScores.length; i++) {
            if (playerScores[i] > playerScores[highScoreIndex]) {
                highScoreIndex = i;
            }
        }
        return highScoreIndex;
    }

}

/* Main Function Layout
encapsulate variables
Declare Variables for arguments
Num of players and hands
Shuffle
Deal
PlayCard
Compare Values
Take Book       
*/
//still testing this idea
function play(game, Player1, Player2 , Player3, Player4 ){
    Player1.playCard(Player1.hand, game.table);
    Player2.playCard(Player2.hand, game.table);
    Player3.playCard(Player3.hand, game.table);
    Player4.playCard(Player4.hand, game.table);
    getHighScoreIndex(game.table);
}


    function main(){
        const newGame = new Game();
        const Player1 = new Player();
        const Player2 = new Player();
        const Player3 = new Player();
        const Player4 = new Player();
        newGame.deck.Shuffle(newGame.deck);
        newGame.deck.Deal(Player1.hand, Player2.hand, Player3.hand, Player4.hand);
        play()
        // Player1.playCard(Player1.hand, newGame.table);
        // Player2.playCard(Player2.hand, newGame.table);
        // Player3.playCard(Player3.hand, newGame.table);
        // Player4.playCard(Player4.hand, newGame.table);
        // getHighScoreIndex(newGame.table);

        
        
    }    