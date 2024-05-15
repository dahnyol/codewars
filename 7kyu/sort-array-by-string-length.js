// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//P will take in an array of strings, no multiples of the same string 
//R return an array of strings in an ordered list by length 
//E sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
// (sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
//(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

//P create copy of array of strings
// return copy array.sort by array.length 

function sortByLength (array) {
    let arr = array.slice();
    return arr.sort((a,b) => a.length - b.length)
}