// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

// func takes in an array of strings 
// return an array of strings or 'invalid string' if string.length < 2
// evenChars ("1234"), ["2", "4"])
// evenChars (";;;--"), [";", "-"])
// evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])

//function evenChars(string) {
    // if string.length < 2 || string.length > 100
    // return 'invalid string'
    // iterate over arr 
    // filter out string[i % 2] 

function evenChars(string) {
    let arr = [...string] // split to convert into arr
    if(arr.length < 2 || arr.length > 100) 
        return 'invalid string'

    return arr.filter((el, i) => i % 2)
}


const evenChars = string =>
  string.length < 2 || string.length > 100 ? `invalid string` : [...string].filter((_, idx) => idx % 2);


function evenChars(s) {
    if(s.length<2 || s.length>100)
      return "invalid string";
    let output = [];
    for(let i = 1; i < s.length; i += 2)
    {
      output.push(s[i]);
    }
    return output;
}