// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// note: function must iterate over each letter/element in the string/array and check if the string is the same if letters reversed.
//P takes a string, case insensitive
//R returns true or false or yes or no
//E
function palindromeCheck(string){
//P // get string or numbers from the user
    // init variable to hold numbers
    // reverse given number
    // compare original number with reversed number
    // if temp === original, then yes palindrome
    // else not a palindrome
}


function isPalindrome(x) {
    let reversedX = x.split('').reverse().join('');
    
    return reversedX.toLowerCase() == x.toLowerCase(); 
}


function isPalindrome(x, str = x.toLowerCase()) {
    return str === [...str].reverse().join('')
}