// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//note refuse all words within string
//P words seperated by one space, no leading or trailing spaces
//R return reverse words of each word in string
//E
function reverseWords(sentence) {
//P // use method split and reverse
    // or for loop instead of reverse method
    // init new sentence variable empty array
    // split string into array
    // iterate over sentence and add/push word to the empty array
    // join the empty array together as a string and return it
}


const reverseWords = sentence => sentence.split(' ').reverse().join(' ');


function reverseWords(str){
    return str.split(' ')
          .reverse()
          .join(' ')
}