const values2 = {
    "d 2" : 2,
    "d 3" : 3,
    "d 4" : 4,
    "d 5" : 5,
    "d 6" : 6,
    "d 7" : 7,
    "d 8" : 8,
    "d 9" : 9,
    "d 10" : 10,
    "d J" : 11,
    "d Q" : 12,
    "d K" : 13,
    "d A" : 14,
    "h 3" : 3,
    "h 2" : 2,
    "h 4" : 4,
    "h 5" : 5,
    "h 6" : 6,
    "h 7" : 7,
    "h 8" : 8,
    "h 9" : 9,
    "h 10" : 10,
    "h J" : 11,
    "h Q" : 12,
    "h K" : 13,
    "h A" : 14,
    "c 2" : 2,
    "c 3" : 3,
    "c 4" : 4,
    "c 5" : 5,
    "c 6" : 6,
    "c 7" : 7,
    "c 8" : 8,
    "c 9" : 9,
    "c 10" : 10,
    "c J" : 11,
    "c Q" : 12,
    "c K" : 13,
    "c A" : 14,
    "s 2" : 15,
    "s 3" : 16,
    "s 4" : 17,
    "s 5" : 18,
    "s 6" : 19,
    "s 7" : 20,
    "s 8" : 21,
    "s 9" : 22,
    "s 10" : 23,
    "s J" : 24,
    "s Q" : 25,
    "s K" : 26,
    "s A" : 27,
}

function Deal() {
    for (let i = 0; i < deck.cards.length / 4; i++) {
        p1Deck[i] = deck.cards[i];
    }
    // for (let i = deck.cards.length / 4; i < deck.cards.length / 2; i++) {
    //     p2Deck[i] = deck.cards[i];
    // }
    // for (let i = deck.cards.length / 2; i < ((deck.cards.length / 2) + (deck.cards.length / 4)); i++) {
    //     p3Deck[i] = deck.cards[i];
    // }
    // for (let i = ((deck.cards.lenth / 2) + deck.cards.length / 4); i < deck.cards.length; i++) {
    //     p4Deck[i] = deck.cards[i];
    // }
    for (let i = 26; i < deck.cards.length; i++) {
        p2Deck[i] = deck.cards[i];
    }

    return p1Deck;
    return p2Deck;
    // return p3Deck;
    // return p4Deck;
}