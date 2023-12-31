// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//note: function takes an array of items containing one 'needle', return a string message with the index position of the needle.
//P take an array in of strings maybe nums? 
//R return a index rather then the element with the string message
//E
function needle(arr){
//P //iterate over array and find the index of the string needle, we know it exists in the array 
    //do not have to go through entire arr, just until finding 'needle'
}

function findNeedle(haystack) {
    let needle = haystack.indexOf('needle');
    return `found the needle at position ${needle}`;
}


const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;