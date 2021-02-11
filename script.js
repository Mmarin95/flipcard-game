const SUITS = ["Club", "Diamond", "Heart", "Spades"];
const CARD_FACES = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

class Deck {
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
}

class Card {
  constructor(suit, card_face) {
    this.suit = suit;
    this.card_face = card_face;
  }
}

const freshCardsDeck = () => {
  return SUITS.flatMap((suit) => {
    return CARD_FACES.map((face_card) => {
      return new Card(suit, face_card);
    });
  });
};

const deck = new Deck();
deck.shuffle()
console.log(deck.cards);
