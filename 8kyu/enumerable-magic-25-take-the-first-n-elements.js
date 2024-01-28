// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    return arr.slice(0, n);
  }

const take = (arr, n) => arr.slice(0, n);
  
  //function take(arr, n) {
    // make array to return at the end
    // if arr has greater than 0 elements
    // loop over array up to N , starting from the first indexed element
    // add the current element, arr[i], to the array
    // return array at end
  //}
  
  
  /*
  Can you re-state the problem in your own words?
  We need to get a list and return a certain number of items on the list.
  What are the inputs that go into the problem?
  Input of an array, and one input of a one Number type. 
  What are the outputs that should come from the solution?
  Returning an array with the given input number of items in the array.
  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? 
  How should I label the important pieces of data that are part of the problem? 
  Yes, but what about edge cases? Number only or change string into Number? Throw error if incorrect input types detected?  
  */
  
  /* // Start with Simple Examples
  take([2,4,10,3,1], 4) // [2, 4, 10, 3]
  // Progress to more complex examples
  take('array', 'hello') // return "Please input an Array and a Number" 
  // Explore examples with empty inputs
  // Explore examples with invalid inputs
  take('', '') // empty string/invalid inputs -> return error
  */