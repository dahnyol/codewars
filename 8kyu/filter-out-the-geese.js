// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


// NOTES: function takes a list of strings in an array. given an array of strings called geese, compare the input array with the geese array and filter out the geese. return the filtered array in the same order. there will be repeated elements.
//P input is an array/list of strings
//R return an array/list of strings in the same order without filtered elements
//E
function filterGeese(listOfStrings){
//P // init geese = [array, of, geese]
    // filter method on listOfStrings.filter((word) => word !== geese)
}


function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
      /* 
  return non-matches
    return an array containing all of the strings in the input array except those that match strings in geese
    Use a combination of Array.prototype.filter and Array.prototype.inclues
    
    Steps
    1. filter creates new array
    2. elements that pass test are implemented
    3. includes determins whether an array includes a certain value 
      3.a) returns a true or false (we want the false values to be returned) 
    4. Non-Geese elements are returned
  */
    return birds.filter((bird) => !geese.includes(bird))
};


function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};


function gooseFilter(birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let noGeese = [];

    for(let i = 0; i < birds.length; i++){
        if(!geese.includes(birds[i])){
            noGeese.push(birds[i]);
        }
    }
    return noGeese;
}


const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

const notGoose = bird =>
  !geese.includes(bird)

const gooseFilter = birds =>
  birds.filter(notGoose)