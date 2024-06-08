// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//P string of words given
//R return an array of the input words, sorted
//E last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    
//P function last(x){
    // return x.split(' ') // split by spaces into array
    // sort((a,b) => a-b) a is the first element is converted to UTF 16 code
    // and b is the next element in the array, is converted to UTF 16 code
    // then subtracts the code to sort

    // a.charCodeAt(a.length - 1) to find the UTF code of the last char in the first element a
    // b.charCodeAt(.length - 1) to find the UTF code of the last char in the second element b
    // sort them
//   .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))


function last(x){
    return x.split(' ')
    .sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}