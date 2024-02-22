// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//change N to string
String(n)
//split N string into array
.split('')
//sort the array into descending order
.sort((a,b) => b -a)
//join the array
.join('')
//convert array to string and return
Number(n.split.sort.join)

const descendingOrder = n => 
//[...String(n)]
Number(String(n).split('').sort((a,b) => b - a).join(''))


function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}