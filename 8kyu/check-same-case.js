// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

//function takes two parameters, each parameter will be a string char type. 
// if either parameter is not matching string data type, return -1
// if parameter is matching case sensitive return 1
// if parameter data types are string and not the same case return 0

function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    } else
    if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else
    return 0
}

function sameCase(a, b){
    let upperA = a.toUpperCase()
    let upperB = b.toUpperCase()
    let lowerA = a.toLowerCase()
    let lowerB = b.toLowerCase()
    
    if(lowerA == upperA || lowerB == upperB){
      return -1
    }else if(a == upperA && b == upperB || a == lowerA && b == lowerB){
      return 1
    }
    return 0
}

function sameCase(a, b){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'

    // if input a.toLowerCase() is not included in alpha
    // or if input b.toLowerCase is not included in alpha
    // return -1 (checks if either input is a letter)
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase()))
        return -1

    // fn to compare inputs case type
    const checkCase = x => {
        if(x === x.toLowerCase()) return 'lower'
        if(x === x.toUpperCase()) return 'upper'
    }
    // use fn checkCase to compare if inputs are matching case sensitivity
    return checkCase(a) === checkCase(b) ? 1 : 0
}


// regex
const isLower = s => /[a-z]/.test(s)
const isLetter = s => /[a-zA-Z]/.test(s)

const sameCase = (a, b) => isLetter(a) && isLetter(b) 
  ? isLower(a) === isLower(b) ? 1 : 0
  : -1