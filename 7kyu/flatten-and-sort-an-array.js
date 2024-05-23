// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//P given an array of arrays
//R combine the array of arrays into a single array in asc
//E 
//P flattenAndSort([]), []);
// flattenAndSort([[], []]), []);
// flattenAndSort([[], [1]]), [1]);
// flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

//P iterate through the array of arrays
// on each loop, check into the current element array
// loop through the current element array 
// push each element in that array into new res
// sort the new array asc
// return the new array


function flattenAndSort(array) {
    let res = [];
  
    for(let i = 0; i < array.length; i++){
      array[i].forEach((num) => {
          res.push(num)
      })
    }
    return res.sort((a,b) => a - b);
}


const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);


function flattenAndSort(array) {
    let res = [];
  
    for(let i = 0; i < array.length;i++){
        for(let j = 0; j < array[i].length; j++){
            res.push(array[i][j])
        }
    }
    return res.sort((a,b)=>a-b)
}


function flattenAndSort(array) {
    return array
      .reduce((result, current) => [...result, ...current],[])
      .sort((a, b) => a - b)
      ;
}


function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
}