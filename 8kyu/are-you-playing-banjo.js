// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//notes: function takes in a letter parameter , will be checking case sensitive, argument will be strings only.
//P takes in a string, will be a valid string, case sensitive
//R return a string for T or F condition
//E
function banjo(name){ 
//P  //iterate over name
    //check first element in letter, check condition if  r or R
    // if yes return string plays banjo, if no return does not    
}

//testcase
banjo('roger') // roger plays banjo
banjo('Roman') // Roman plays banjo
banjo('ted') // ted does not play banjo

function areYouPlayingBanjo(name) {
    for (let i = 0; i < name.length; i++) {
      if(name[i][0] === 'R' || name[i][0] === 'r'){
          return name + " " + "plays banjo"
      } else {
          return name + " " + "does not play banjo"
      }
    }
}

function areYouPlayingBanjo(name) {
    return (name[0] === 'r' || name[0] === 'R') ? `${name} plays banjo` : `${name} does not play banjo`;
}