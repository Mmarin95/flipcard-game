const SUITS = ["♣", "♦", "♥", "♠"];
const CARD_FACES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = freshCardsDeck()) {
    this.cards = cards;
  }

  get numCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numCards - 1; i > 0; i--) {
      const newPosition = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newPosition];
      this.cards[newPosition] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

  refreshDeck() {
    this.cards = freshCardsDeck();
  }
}

class Card {
  constructor(suit, card_face) {
    this.suit = suit;
    this.card_face = card_face;
  }

  color(suit) {
    console.log(suit, suit.includes("♦♥"));
    // return suit.includes("♦♥") ? "red" : "black";
    return "♦♥".includes(suit) ? "red" : "black";
  }

  cardHTML() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "card-face", this.color(this.suit));
    cardDiv.innerHTML = this.suit;
    cardDiv.dataset.value = `${this.card_face} ${this.suit}`;
    return cardDiv;
  }
}

const freshCardsDeck = () => {
  return SUITS.flatMap((suit) => {
    return CARD_FACES.map((face_card) => {
      return new Card(suit, face_card);
    });
  });
};
