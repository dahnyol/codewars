// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

//P will take an array of int, always length > 2
//R return array of [second oldest, oldest], if multiple , put in array, [[second oldest, second oldest], oldest]
//E[1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

//P 
// loop over array, if current[i] > current[i + 1] , assign to oldest variable
// if current[i] < current[i + 1] , assign second oldest
// if current[i] 
// 
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    const arr = ages.sort((a,b) => b - a);
    return [arr[1], arr[0]];
}

function twoOldestAges(ages){
   const arr = ages.sort((a,b) => a - b);
   return [arr[arr.length - 2], arr[arr.length - 1]];
}

function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
}

function twoOldestAges(ages){
    let oldest = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < ages.length; ++i) {
      if (ages[i] > oldest) {
        second = oldest;
        oldest = ages[i];
      } else if (ages[i] > second){
        second = ages[i];
      }
    }
    return [second, oldest];
}