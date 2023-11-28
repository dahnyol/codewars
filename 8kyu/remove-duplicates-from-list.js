// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// notes: function takes an array of non negative numbers. return the same array without duplicates, only unique numbers. can check for same number on iterations or use a method like set

//P an array of non negative numbers , may have duplicate numbers
//R return an array of the non negative numbers but without any duplicates. a list of unique numbers
//E
function removeSame(array){
//P  // create a new variable to store values 
    // loop through the array given
    // check the condition: if the current element being checked is the same as the element checked before.
    // if it is true, the element is the same, then do not add it
    // if it is false, the element is the first time it is being seen, add it to the new variable
    // return the new variable
}


// use helper array [ ]
function distinct(nums){
    let uniqueNumbers = []; 
    nums.filter((element, index) => {
          if(nums.indexOf(element) === index){
            uniqueNumbers.push(element);
          }
      })
    return uniqueNumbers;
}
// filter will loop through the array nums and leave only entries that pass
//the condition: check if the given value is the first occurring. If not, it must be a duplicate and will not be copied.

const distinct = nums => nums.filter((element, index) => nums.indexOf(element) === index);


// use object { } to prevent duplicates
function distinct(array){
    let j = {};

    array.forEach(function(element){
        j[element + '::' + typeof element] = element;
    });

    return Object.keys(j).map(function(element){
        return j[element];
    });
}

// use filter + indexOf
function distinct(arr){
    function onlyUnique(value, index, self){
        return self.indexOf(value) === index;
    }
    
    let unique = arr.filter(onlyUnique);
    return unique;
}

// use spread and set [...new Set(newArray)]
function distinct(a){
    return [...new Set(a)];
}

// forEach method
function distinct(arr){
    let uniqueArr = [];
    arr.forEach(element => {
        if(!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    })
    return uniqueArr;
}

// use reduce
function distinct(a){
    a.reduce((acc, curr) => {
        return acc.includes(curr) ? acc : [...acc, curr];
    }, [])
}