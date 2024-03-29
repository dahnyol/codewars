// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
// Examples

// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

// Note

//     start < stop
//     step > 0

//function generateRange(min, max, step){
    //min set to determine when to start counting
    //max set to determine when to stop counting
    //increment by the step variable
    //return an array with populated with the counted variables

function generateRange(start, stop, step){
    let res = []
    
    for(let i = start; i <= stop; i+=step){
        res.push(i)
    }
    return res;
}

function generateRange(min, max, step){
    let res = [];
    for(let i = min; i <= max; i+=step){
      res.push(i);
    }
    return res;
}