// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//note: split string into array of words as its elements.
//basics is for loop and push everything into an array, but split does this for us
//P get a string
//R return an array
//P
function splitStr(string){
//P //use split or for loop to push string into array
    //return array
}
//test case
splitStr('yo how are u') // ['yo', 'how', 'are', 'u']
splitStr('daniel john') // ['daniel', 'john']

function stringToArray(sring) {
    return string.split(' ');
}


//for loop
function stringToArray(string){
    let result = [];
    let temp = ''

    for(let i = 0; i < string.length; i++) {
        if (string[i] !== ' '){
            temp += string[i]
        } else {
            result.push(temp)
            temp = ''
        }
    }
    result.push(temp)
    return result;
}