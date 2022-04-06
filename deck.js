const SUITS = ["♣︎", "♠︎", "♥︎", "♦︎"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7",
"8", "9", "10", "J", "Q", "K"]

export class Deck {
    constructor() {
        this.cards = createDeck();
    }

    get numberOfCards() {
        return this.cards.length;
    }


    shuffleDeck = () => {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

class Card {
    constructor(suit, value, visible) {
        this.suit = suit;
        this.value = value;
        this.visible;
    }
}


let createDeck = () => {
    let deck = [];
    for(let i = 0; i < SUITS.length; i++) {
        for(let j = 0; j < VALUES.length; j++) {
            deck.push(new Card(VALUES[j], SUITS[i], true));
        }
    }
    return deck;
}