// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// init array of alphabet or make a string and split it
// check the position of the letter given in the arg
// return the position/index in the array 

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split('');
    
    if (alphabetArr.includes(letter)) {
      let position = alphabetArr.indexOf(letter) + 1;
      return `Position of alphabet: ${position}`
    }
}

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}