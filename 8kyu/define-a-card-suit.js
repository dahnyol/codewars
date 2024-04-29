// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//P taking in a two character string, a number and a symbol card suit
//R return a string of the card suit name that represents the symbol card suit given from the input, all lowercase, can ignore number (is it always ordered number then symbol?)
//E 
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

//P 

function defineSuit(card){
    if(card.includes('♠')) return 'spades'
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
}


function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}