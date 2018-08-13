$(document).ready(function() {

  var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  var suits = ['diamonds', 'spades', 'clubs', 'hearts'];
  var cards = [];

   console.log(suits);

   function card(suit, rank) {
     this.suit = suit;
     this.rank = rank;
   };

  function CreateDeck() {
    suits.forEach(function(rank) {
      ranks.forEach(function(suit) {
        cards.push(new card(rank, suit));
      });
    });

  console.log(cards);
  };

  CreateDeck();
});
