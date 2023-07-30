// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//P: string, no numbers
//R: return a string , not case sensitive
//E
function removeMarks(string) {
    // init variable to store result
    // split string letters into an array of elements
    // iterate over each element and check with condition 
    // if not equal to !, then go ahead print/add
    // if it is !, then remove/ignore it 
    // join the elements in the array back into a string 
    // return the string
}

//test case
removeMarks('!!gello!!') // gello
removeMarks('h!el!!Eo!') // heloEo
removeMarks('hello') // hello

function removeExclamationMarks(str) {
    let result = [];
    str.split('')
       .forEach((letter) => {
            if (letter != '!') {
                result.push(letter)
            }
       })
    return result.join('');
};

// simply split by '!' and join
function removeExclamationMarks(s) {
    return s.split('!').join('');
};

// for loop without changing it into array
function removeExclamationMarks(s){
    let result = '';
    for(let i = 0; i < s.length; i++){
      if(s[i] != '!'){
        result += s[i];
      };
    };
    return result;
};

// replace + regex
const removeExclamationMarks = (s) => s.replace(/\!/g,'');