const book = [];
let playerDeck = [];
//let currentPlayer = 1;

// document.getElementById("prepButton").addEventListener("click", Shuffle);
// document.getElementById("playCardButton").addEventListener("click", currentPlayerTurn);
// document.getElementById("determinePlayer1").addEventListener("click", determinePlayer1);
// document.getElementById("determinePlayer2").addEventListener("click", determinePlayer2);
// document.getElementById("determinePlayer3").addEventListener("click", determinePlayer3);
// document.getElementById("determinePlayer4").addEventListener("click", determinePlayer4);

const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "0A", "0B", "0C", "0D", "0E"];

let p1Hand = [];
let p2Hand = [];
let p3Hand = [];
let p4Hand = [];
let playerHand = [];

let playCount = 0;
let numberOfBooks = 0;

let p1Books = 0;
let p2Books = 0;
let p3Books = 0;
let p4Books = 0;

let currentPlayer = 0;

function determinePlayer1() {
    toggleElement('start-screen', false);
    toggleElement('play-screen', true);
    playerHand = p1Hand;
    currentPlayer = 1;
}

function determinePlayer2() {
    toggleElement('start-screen', false);
    toggleElement('play-screen', true);
    playerHand = p2Hand;
    currentPlayer = 2;
}

function determinePlayer3() {
    toggleElement('start-screen', false);
    toggleElement('play-screen', true);
    playerHand = p3Hand;
    currentPlayer = 3;
}

function determinePlayer4() {
    toggleElement('start-screen', false);
    toggleElement('play-screen', true);
    playerHand = p4Hand;
    currentPlayer = 4;
}

class Deck {
    constructor(cards = createDeck()) {
        this.cards = cards;
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function createDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value);
        });
    });
}

const deck = new Deck();

function Shuffle() {
    //Rearrange order of the cards (Random)
    //Rearrange order of entire deck, not suit by suit
    for (let i = deck.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const X = deck.cards[i];
        deck.cards[i] = deck.cards[j];
        deck.cards[j] = X;
    }
    console.log(deck);
    Deal();
}

//Dealer distributes a deck of cards to 4 players
function Deal() {              
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

    return p1Hand;
    return p2Hand;
    return p3Hand;
    return p4Hand;
}

function currentPlayerTurn() {
    console.log(`Player ${currentPlayer}'s Turn`);
    if (currentPlayer === 1) {
        playerHand = p1Hand;
    }
    else if (currentPlayer === 2) {
        playerHand = p2Hand;
    }
    else if (currentPlayer === 3) {
        playerHand = p3Hand;
    }
    else if (currentPlayer === 4) {
        playerHand = p4Hand;
    }
    //playCard(playerHand);
    createBook(table);
    playCount++;

    if (playCount === 4) {
        console.log(table);
        //createBook(table);
        playCount = 0;
        console.log("End of Round");
    }

    // Advance to the next player's turn
    currentPlayer = (currentPlayer % 4) + 1;

    return playCount;
}

function playCard(playerHand) {
    // Is the player's hand empty?
    if (playerHand.size === 0) {
        console.log("Out of Cards");
        return; // Exit function if no cards are left in the player's hand
    }

    /* For the demo purposes, display the player's hand in the console
    so they can view each of the cards index, value, and suit */
    console.log(`Player ${currentPlayer}'s Hand: `);
    for (let i = 0; i < playerHand.length; i++) {
        const card = playerHand[i];
        console.log(`${i}: ${card.value} of ${card.suit}`);
    }

    // Continuosly to prompt the user until valid input is received
    // We can change this later when a bot is implemented
    while (true) {
        const cardIndexPrompt = prompt(`Player ${currentPlayer}, enter the index of the card to play: `);
        const cardIndex = parseInt(cardIndexPrompt);

        if (cardIndex >= 0 && cardIndex < playerHand.length) {
            // Remove the card from the player's hand
            const cardPlayed = playerHand.splice(cardIndex, 1)[0];
            // Add the card played to the book array
            book.push(cardPlayed);
            // Log the action to the console
            console.log(`Player ${currentPlayer} played ${cardPlayed.value} of ${cardPlayed.suit}`);
            break;
        }

        console.log("Invalid input. Try again.");
    }
}

async function createBook(tableSet) {
    let highestCard = tableSet[0];
    let index = 0;

    await playCard(playerHand);

    for (let i = 0; i < tableSet.length; i++) {
        if (tableSet[i].suit === "Spades") {
        tableSet[i].value = tableSet[i].value + 13;
        }
        if (parseInt(tableSet[i].value, 16) > parseInt(highestCard.value, 16)) {
            highestCard = tableSet[i];
            index = i;
        }
    }
    takeBook(index);
    return index;
}

function Winners(p1Score, p2Score, p3Score, p4Score){

    let scores = [];
    let winners = [];
    let highScore = 0;
    let playerScores = "";
    let winningMessage = "";

    scores.push(p1Score,p2Score,p3Score,p4Score);

    highScore = getHighScore(scores);

    for(let i = 0; i < scores.length; i++){
        if(highScore == scores[i]){
            winners.push(`Player${i+1}`);	
        }
    }
    for(let i = 0; i < 4; i++){
        playerScores += `Player${i+1} Score: ${scores[i]} \n`;	
    }

    winningMessage += playerScores;

    if(winners.length < 2)
        winningMessage += "The winnner is " + winners[0];	
    else{
        winningMessage += "It's a tie! The winners are";
        for(let i = 0; i<winners.length; i++) {
            winningMessage += " " + winners[i];
        }
    }
    winningMessage += "!";
    console.log(winningMessage);
    return winningMessage;
} 

function Compare(num1, num2){
    if(num1 > num2)
        return num1;
    else
        return num2;
}

function getHighScore(playerScores){
    let highScore = Compare(playerScores[0],playerScores[1]); 

    for(let i = 1; i < playerScores.length; i++){
        highScore = Compare(highScore,playerScores[i]) 
    }
    return highScore;
}

function gCollect() {
    table = null;
}

function toggleElement(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none';
    element.style.display = display;
}