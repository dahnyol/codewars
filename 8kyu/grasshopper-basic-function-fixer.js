// Fix the function

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?


// note: debug the problem 

// function addFive(num) {
//     var total = num + 5
//     return num;
// }


function addFive(num) {
    // declare let instead of var
    let total = num + 5
    // returning the wrong variable num, changed num to total
    return total;
}