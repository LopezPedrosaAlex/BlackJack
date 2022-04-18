import { Deck } from './deck.js';

export class Player {

    constructor() {
        this.score;
        this.cards = [];
        this.turn = false;
    }

    // Asks for a card
    newCard = (card) => {
        this.cards.push(card);
    }
    // Stand
    stand = () => {
        this.turn = false;
    }
    // Split

}

