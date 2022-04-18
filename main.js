import { Deck } from "./src/deck.js";
import { Player } from "./src/players.js";
import { ScoreBoard } from "./src/scoreBoard.js";

let DECK_POSITION = 0;
let PlayerHTML = document.getElementById('playerCards'); 
let dealerHTML = document.getElementById('dealerCards'); 
let playerGetCard = document.getElementById('playerNewCard');
let playerStand = document.getElementById('playerStands');
let playerScoreHTML = document.getElementById('playerScore');
let dealerScoreHTML = document.getElementById('dealerScore');
let scoreHTML = document.getElementById('score');

window.onload = start;

function start() {
    let deck = new Deck();
    let player = new Player();
    let scoreBoard = new ScoreBoard();
    let dealer = new Player();

    deck.shuffleDeck();
    player.turn = true;

    let refreshInfo = () => {
        dealerHTML.textContent = JSON.stringify(dealer, null, '\t');
        PlayerHTML.textContent = JSON.stringify(player, null, '\t');
        player.score = scoreBoard.score(player.cards);
        dealer.score = scoreBoard.score(dealer.cards);
        dealerScoreHTML.textContent = dealer.score;
        playerScoreHTML.textContent = player.score;
        
    }

    for(DECK_POSITION; DECK_POSITION < 4; DECK_POSITION++) {
        dealer.newCard(deck.cards[DECK_POSITION++]);
        player.newCard(deck.cards[DECK_POSITION]);
        refreshInfo();

    }
      
    playerGetCard.onclick = () => {
        player.newCard(deck.cards[++DECK_POSITION]);
        refreshInfo();
        checkOver21();
    }
    
    playerStand.onclick = () => {
        player.turn = false;
        dealer.turn = true;
        dealerTurn();
        playerGetCard.setAttribute('disabled', true);
        refreshInfo();
    }    

    let dealerTurn = () => {
        if(player.turn === false) {
            while(dealer.score < 15) {
                dealer.newCard(deck.cards[++DECK_POSITION]);
                refreshInfo();
                checkOver21();
            }
            dealer.turn = false;
        }
        checkScore();
    }
    
    let checkOver21 = () => {
        if(scoreBoard.checkOver21(player, dealer) === 'Player') {
            score.textContent = 'PLAYER WINS!';
        } else if(scoreBoard.checkOver21(player, dealer) === 'Dealer'){
            score.textContent = 'DEALER WINS!';
        }
    }

    let checkScore = () => {
        if(scoreBoard.checkScore(player, dealer)) {
            score.textContent = 'PLAYER WINS!';
        } else {
            score.textContent = 'DEALER WINS!';
        }
    }
}
