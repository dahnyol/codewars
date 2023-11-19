// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

// note:  debug function, function wants to capitalize first letter of word input. currently returns only the first letter capitalized. 
//P parameter is one string input, string.length always > 0
//R returns the same string input with a capitalized first letter/element
//E
function cap(word){
//P init new variable to hold snew tring or array as strings as immutable
    // iterate over word
    // if it is word[0] then to.UpperCase()
    // else add the same word[i]
}


function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}


function capitalizeWord(word) {
    let result = word[0].toUpperCase() + word.slice(1) 
    return result;
}