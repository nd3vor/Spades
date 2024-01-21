const book = [];
let playerDeck = [];
let currentPlayer = 1;

document.getElementById("playCardButton").addEventListener("click", currentPlayerTurn);

function currentPlayerTurn() {
    console.log(`Player ${currentPlayer}'s Turn`);
    playCard(playerDeck);

    playCount++;

    if (playCount === 4) {
        playCount = 0;
        console.log("End of Round");
    }

    // Advance to the next player's turn
    currentPlayer = (currentPlayer % 4) + 1;
}

function playCard(playerHand) {
    // TODO: Check if the input is valid
    // TODO: Make sure the input value is not outside of the range (0-12)

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

    // Continue to prompt the user until valid input is received
    while (true) {
        const cardIndexPrompt = prompt(`Player ${currentPlayer}, enter the index of the card to play: `);
        const cardIndex = parseInt(cardIndexPrompt);

        if (cardIndex >= 0 && cardIndex < playerHand.length) {
            const cardPlayed = playerHand.splice(cardIndex, 1)[0]; // Remove the card
            book.push(cardPlayed); // Add the card to the book array
            console.log(`Player ${currentPlayer} played ${cardPlayed.value} of ${cardPlayed.suit}`);
            break;
        }

        console.log("Invalid input. Try again.");
    }
}