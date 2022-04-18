import { Deck } from "./deck.js";
import { Player } from "./players.js"

const values = {"A": 11, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6,
"7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10}

export class ScoreBoard {


    score(cards) {
        let score = 0;
        cards.forEach(element => {
            score += values[element.value];
        });
        return score;
    }

    checkOver21(player, dealer) {
        if(player.score > 21) {
            // Dealer wins
            return 'Dealer';
        } else if(dealer.score > 21) {
            // Player wins
            return 'Player';
        } else {
            return 'None';
        }
    }

    checkScore(player, dealer) {
            if(player.score > dealer.score) {
                // Player wins
                return true;
            } else {
                // Dealer wins
                return false;
            }
        }
    
}