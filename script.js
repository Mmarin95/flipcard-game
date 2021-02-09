const SUITS = ["Club", "Diamond", "Heart", "Spades"];
const FACE_CARDS = [
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

const deck = SUITS.flatMap((suit) => {
  const pair = FACE_CARDS.map((face_card) => {
    return [suit, face_card];
  });
  return pair;
});

console.log("deck", deck);
const shuffle = (deck) => {
  let shuffledDeck = [];
  const numCards = deck.length;

  for (let i = numCards - 1; i >= 0; i--) {
    const newPosition = Math.floor(Math.random() * (i + 1));
    // console.log("i", i, "newPosition", newPosition);

    const oldValue = deck[newPosition];
    // console.log("oldValue", oldValue);

    shuffledDeck[oldValue] = deck[i];
    // console.log("Current", deck[i], "is in", newPosition, shuffledDeck[oldValue]);

    shuffledDeck[i] = deck[newPosition];
    // console.log("OldValue", deck[newPosition], "is in", i, shuffledDeck[i]);
  }
  return shuffledDeck;
};

console.log(shuffle(deck));
