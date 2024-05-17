// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

//P parameter takes in a string that will be a mix of capital/lowercase chars
//R return an array with the index position of each capital letter in the given string
//E "CodEWaRs" --> [0,3,4,6]
//P result array to hold indexes
// loop over string given
// on each loop, check if the current el === el.toUpperCase() 
// if true, push indexOf(el) to result array
// return result array

const capitals = (word) => {
	let result = [];

    for (let i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()){
            //result.push(word.indexOf(word[i]))
            result.push(i)
        }
    }
    return result;
};