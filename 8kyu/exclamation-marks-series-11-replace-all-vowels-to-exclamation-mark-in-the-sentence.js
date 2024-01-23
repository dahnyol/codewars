// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    //iterate through s string
    //on each iteration check if the s[i] matches [a || e || i || o || u] - case sensitive
    //if match is true, assign the element to be "!" 
    //return push/concat to result s[i]
}

const replace = s => (s.split('')
                        .map(element => ['a','e','i','o','u']
                        .includes(element.toLowerCase()) ? '!' : element))
                        .join('');


function replace(s){
    let result = '';
    let lowerCaseS = s.toLowerCase();

    for(let i = 0; i < lowerCaseS.length; i++){
      if(lowerCaseS[i] === 'a' || lowerCaseS[i] === 'e' || lowerCaseS[i] === 'i' || lowerCaseS[i] === 'o' || lowerCaseS[i] === 'u'){
        result += '!'
      } else {
        result += s[i];
      }
    }
    return result;
}


function replace(s){
    let res = '';
    let vowels = "aAeEiIoOuU"

    for(let i = 0; i < s.length; i++){
        if (vowels.indexOf(s[i]) === -1) {
            res += s[i]
        } else {
            res += "!"
        }
    }
    return res;
}


function replace(s){
  let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = s.split('')
  for(let i = 0; i < arr.length; i++){
      if(a.includes(arr[i])){
           arr[i] = '!'
      }
  }
  return arr.join('')
}


function replace(s) {
    let sArr = s.split('');
    
    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === 'a' ||
          s[i] === 'e' ||
          s[i] === 'i' ||
          s[i] === 'o' ||
          s[i] === 'u' ||
          s[i] === 'A' ||
          s[i] === 'E' ||
          s[i] === 'I' ||
          s[i] === 'O' ||
          s[i] === 'U') {
        sArr[i] = '!';
      }
    }
    return sArr.join('');
}

//regex 
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
}