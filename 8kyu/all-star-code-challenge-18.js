// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0


// notes: function takes 1 string, 1 single char. returns the count of the single char in the first input string. if 0 return 0
//P 2 parameters, both strings
//R return number, a count or 0
//E
function findChar(word, letter){
//P split word into array.
//  check if the letter exist in the split array
//  return 0 if not, else return count of letter
}


const strCount = function(str, letter){
    let strArray = str.split('');
    let count = 0;

    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] === letter) {
            count++;
        }
    }
    return count;
}


const strCount = function(str, letter){
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}


function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}


function strCount(str, letter) { 
    let count = 0;
    
    [...str].forEach(char => char == letter ? count++ : count);
    
    return count;
}


function strCount(str, letter){  
    return str.split(letter).length-1
}