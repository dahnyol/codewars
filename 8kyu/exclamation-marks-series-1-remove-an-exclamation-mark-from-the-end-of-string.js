// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//P one string parameter 
//R return the same string
//E function remove(string) -> if ! at end of string, remove it, return it
//P function remove(str)
// check the last element in the string. str.length - 1 
// if last element is === '!', return the str - str.length - 1
// if !== '!', return string

function remove(str){
    if (str[str.length - 1] === '!')
      return str.slice(0, str.length - 1);
   else
     return str;
}

// endsWith + slice method
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}

// charAt + substr
function remove(s){
    return s.charAt(s.length-1) == "!" ? s.substr(0,s.length-1) : s;
}

// regex
const remove = s => s.replace(/!$/, '');