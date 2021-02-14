import Deck from "./Deck.js";

const deck = new Deck();
deck.shuffle();

// const deckSlot = document.getElementById("card-deck");
// const table = document.getElementById("table");

// table.appendChild(deck.cards[0].cardHTML());

// const getOneCard = () => {
//   if (deck.cards.length == 0) {
//     cleanTable();
//   } else {
//     const card = deck.cards.pop();
//     table.appendChild(card.cardHTML());
//     deckSlot.innerHTML = deck.numCards;
//   }
// };

// const cleanTable = () => {
//   const faces = document.querySelectorAll(".card-face");
//   faces.forEach((face) => face.remove());
//   deck.refreshDeck();
//   deck.shuffle();
//   deckSlot.innerHTML = deck.numCards;
// };

// deckSlot.addEventListener("click", getOneCard);
