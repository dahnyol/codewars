// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = str => str.split('').reverse().join('');

// for loop 
function solution(str) {
    let reversedStrArr = [];

    for(let i = 0; i < str.length; i++){
        reversedStrArr.unshift(str[i])
    }
    return reversedStrArr.join('');
}