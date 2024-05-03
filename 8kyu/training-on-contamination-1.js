// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.
// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

//P arg can be empty, else will be a string. 2nd arg is the char to mutate the first arg string 
//R return an empty string or return the 2nd arg selected character with the same char length as the arg string
//E Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
// Test.assertEquals(contamination("//case"," "), "      ")

//P function has 2 parameters, first is the string to be changed, second is the character to change the first one to
// return a string of the 2nd parameter with the number of characters determined by the length of the first string parameter

function contamination(text, char){
    let mutatedStr = ''
    let len = text.length;
    for(let i = 1; i <= len; i++){
        mutatedStr += char
    }
    return mutatedStr
  }


function contamination(text, char){
    return char.repeat(text.length)
}

function contamination(text, char) {
    return text.split("").fill(char).join("");
}

// regex
const contamination = (text, char) => text.replace(/./g, char);