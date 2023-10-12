// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// NOTES: given an array/list of strings, sort it alphabetically. case sensitive and based on ASCII values. return first value. Returned value should be a string and **** between each letter. do not add/remove elements
//P input is an array of strings
//R return the first value of the sorted array, should be a string with **** between e****a****c****h letter. 
//E
function sortAndStar(listOfWords){
//P // init variable to hold sorted array
    // init variable to hold sortedarray[0] -- first value/word
    // iterate over letters of word value and add **** between
    // return string as lowercase. 
    // find ascii values
    // can also use ...spread operator and .sort method, get 1st element and .join ***
}


function twoSort(s){
    return [...s.sort()[0]].join('****');
}


function twoSort(s){
    return s.sort()[0].split('').join('***');
}


function twoSort(s) {
    var last = s.sort()[0];
    var a = last[0];
    for(var i = 1; i < last.length; i++) {
      a += "***" + last[i];
    }
    return a;
}


function twoSort(s) {
    let word = s.sort()[0];
    let result = "";
    for(let i = 0; i < word.length; i++){
      result += word[i];
      
      if(i != word.length - 1){
        result += "***";
      }
    }
    return result;
}