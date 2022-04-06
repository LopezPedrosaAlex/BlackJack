import { Deck } from "./deck.js";
import { Player } from "./players.js";

let deck = new Deck();
console.log(deck);

let player = new Player();

for(let i = 0; i < 2; i++) {
    player.newCard(deck.cards[i]);
}

console.log(player.cards);