// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// parameter is a string of any length with ascii chars
// return boolean true or false if it contains english , not case sensitive
// (spEng("english"), true);
// (spEng("egnlish"), false);
// function spEng(sentence){
    // const lowerCase = sentence.toLowerCase()
    // if sentence.includes('english')

function spEng(sentence){
    const lowerCase = sentence.toLowerCase()
    return lowerCase.includes('english')
}


function spEng(s){
    return /english/i.test(s)
}