// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

function alternateCase(string) {
    // init new var to hold new string result to return
    // iterate over string length, each loop, check the current element if it is lowercase or uppercase. 
    // if lower case, push the element as uppercase
    // if upper case, push element as lower case
    // return new var with result, .join to return as string
    // refactor... use split.map 
}
// function alternatingCase(string){
//     let res = [];
//     for (let i = 0; i < string.length; i++){
//         if (string[i].toLowerCase()) {
//             res.push(string[i].toUpperCase())
//         } else {
//             res.push(string[i].toLowerCase())
//         }
//     }
//     return res.join('');
// }


String.prototype.toAlternatingCase = function () {
    return this.split('').map((e) => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('')
}


String.prototype.toAlternatingCase = function () {
    let res = [];
    for (let i = 0; i < this.length; i++){
        if (this[i] === this[i].toLowerCase()) {
            res.push(this[i].toUpperCase())
        } else {
            res.push(this[i].toLowerCase())
        }
    }
    return res.join('');
}


String.prototype.toAlternatingCase = function () {
    let result = '';
    
    for (let letter of String(this)){
      if (letter === letter.toUpperCase()){
      result += letter.toLowerCase();
      } else {
        result += letter.toUpperCase();
      }  
    }
    
    return result;
};