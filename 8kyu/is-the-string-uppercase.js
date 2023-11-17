// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// note: create a method to check input for capital letters. if they are all capital then it is true, else it is false

//P string input, might be empty
//R return true or false
//E
String.prototype.isUpperCase = function() {
//P    // iterate over string/input
    // check if any element/letter in the string is .toUpperCase()
    // if any of them are != to.UpperCase(), return false
    // else return true
    // if the input is empty it is the same as all caps, the rule is it does not contain any lowercase letter (empty input has no lower case letters)
}

    // use this rather than having an argument. this will be the input given and this.toUpperCase() to check the input.
String.prototype.isUpperCase = function(){
    return this == this.toUpperCase();
}
// comment from davorpa: above solution is inefficient for huge strings. better use iterators and check codepoints one by one. better for space/time complexity aka its big o notation.


String.prototype.isUpperCase  = function(_str){
    return this.split("").every(function(c){return c === c.toUpperCase();});
}
// comment from davorpa: str.split(...) makes strings be corrupted (eg. emojis are splited into 2 codepoints). Better to use Array.from(str) to convert it to array safety.


String.prototype.isUpperCase = function(){
    return Array.from(this).every(function(char){
        return char === char.toUpperCase();
    })
}
// same as split but using Array.from(str) with davorpa's suggestion.