$(document).ready(function() {

  var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  var suits = ['diamonds', 'spades', 'clubs', 'hearts'];

  ranks.forEach(function(rank) {
    suits.forEach(function(suit) {
      $(ranks + suit).text();
    })
  })
})


$(rank + " of " + suit).text();
