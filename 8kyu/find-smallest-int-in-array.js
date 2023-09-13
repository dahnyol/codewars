// Given an array of integers your solution should find the smallest integer.
// For example:
//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// notes: function that takes an array of integers, find the smallest one in the array and return it.
//P array.length will always be > 0
//R return the smallest number
//E
function findSmallestNum(array){
//P // can sort the array and store in variable 
    // or sort array then map to find smallest num
    // condition: check if the current number in the array is larger than the one after it
    // return the smallest num
    // can also sort array smallest to highest, then return index[0]
    // use Math.min(...args)
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
          let result;
      for(let i = 0; i < args.length; i++){
          result < args[i] ? result : result = args[i];
      }
      return result;
    }
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sortedArgs = args.sort((a, b) => a - b);
      return sortedArgs[0];
    }
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}