// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// Examples

// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false

// input expects an array of strings
// returns a bool
// function isFlush(cards) {
// only returns true if all in the array match condition
// condition is element[0][1] === every other element[i][1]
// only if all of them match, return true

function isFlush(cards){
    return cards.every(a => cards[0].slice(-1) === a.slice(-1))  
  }

function isFlush(cards) {
    return cards.map(x => x.slice(-1)).every((x, i, arr) => x === arr[0]);
}