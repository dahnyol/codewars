// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(word){
    //word parameter will be a string, may be one or more words
    //split the string into an array.
    //iterate through the array and each time count the length of the current element and add/modify the element with the length seperated by a space. 
    //return array
}

function addLength(str){
    let newArr = []
    let strArr = str.split(' ')
    
    strArr.forEach((word) => {
      word += ' ' + word.length
      newArr.push(word)
    })
    return newArr
}


function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}