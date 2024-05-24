// Create a function that returns the CSV representation of a two-dimensional numeric array.
// More details here: https://en.wikipedia.org/wiki/Comma-separated_values
// Note: you shouldn't escape the \n, it should work as a new line.
// Array's length > 2.

//P function takes an array of integers // Array's length > 2.
//R return a elements of array as string seperated by commas and new lines to seperate records
//E
// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

//P loop through first array, on the first element
// join inner array of elements with ,
// join outter array wtih \n
function toCsvText(array){
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].join(',')
    }
    return array.join('\n')
} 

function toCsvText(array) {
    return array.map(list => list.join(',')).join('\n')
}

function toCsvText(array) {
    return array.join('\n');
}

function toCsvText(array) {
    let output = ''
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        output += array[i][j]
        if (j < array[i].length - 1) {
          output += ','
        }
      }
      if (i < array.length - 1) {
        output += '\n'
      }
    }
    return output
}