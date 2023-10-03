// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.


// NOTE: function takes a number, this number will represent num of petals. petals will always be > 0. Condition is to check if it is between 1-6 and return a phrase with corresponding condition. must be able to loop over the responses 1-6 when petals > 6
//P one +num, always > 0
//R return string representing the last petal picked
//E
function petalsGame(petals){
//P // make obj/array of responses
    // return check petal number % petals.length
}


function howMuchILoveYou(nbPetals) {
    let response = [
      "not at all",
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly"
    ];
  
  return response[nbPetals % response.length];
}


function howMuchILoveYou(nbPetals) {
    let response = [   
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all"
    ];
  
  return response[(nbPetals - 1) % response.length];
}


function howMuchILoveYou(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}


function howMuchILoveYou(nbPetals) {
    let n = nbPetals % 6
    if(n === 1){
        return 'I love you'
    }else if(n === 2){
        return 'a little'
    }else if(n === 3){
        return 'a lot'
    }else if(n === 4){
        return 'passionately'
    }else if(n === 5){
        return 'madly'
    }else if((n === 6) || (n === 0)){
        return 'not at all'
    }
}