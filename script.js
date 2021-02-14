import Deck from "./Deck.js";
const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const textElement = document.querySelector(".text");
let playerDeck, computerDeck;

startGame();

function startGame() {
  const deck = new Deck();
  deck.shuffle();

  const deckMidpoint = Math.ceil(deck.numCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numCards));

  cleanBeforeRound();
}

function cleanBeforeRound() {
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";
  textElement.innerText = "";
  updateDeckCont()
}

function updateDeckCont() {
  computerDeckElement.innerText = computerDeck.numCards
  playerDeckElement.innerText = playerDeck.numCards
}
