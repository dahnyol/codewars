// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

function shortcut (string) {
   let result = '';
   
   for (let i = 0; i < string.length; i++){
        if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u'){
            result += string[i];
        }
   }
   return result;
}


function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}


function shortcut(string){
    var vowels = "aeiou";
    var output = "";
    for (var i = 0; i < string.length; i++) {
      if (!(vowels.indexOf(string[i]) > -1)) {
        output += string[i];
      }
    }
    return output;
}

 
function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
}