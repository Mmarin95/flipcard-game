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

// Class confuses this.cards with get cards(). Name the properties different than methods.
class Deck {
  constructor(cards) {
    this._cards = cards;
  }

  get numCards() {
    return this._cards.length;
  }

  get cards() {
    return this._cards;
  }

  shuffle() {
    const cards = this._cards;
    let shuffledDeck = [];
    for (let i = this.numCards - 1; i >= 0; i--) {
      const newPosition = Math.floor(Math.random() * (i + 1));
      const oldValue = cards[newPosition];
      // shuffledDeck[oldValue] = cards[i];
      // shuffledDeck[i] = cards[newPosition];
      [shuffledDeck[oldValue], shuffledDeck[i]] = [
        cards[i],
        cards[newPosition],
      ];
    }
    return shuffledDeck;
  }
}

class Card {
  constructor(suit, card_face) {
    this.suit = suit;
    this.card_face = card_face;
  }
}

const cards = SUITS.flatMap((suit) => {
  const card = CARD_FACES.map((face_card) => {
    return new Card(suit, face_card);
  });
  return card;
});

console.log(cards);
const deck = new Deck(cards);
