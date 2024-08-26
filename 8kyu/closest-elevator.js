// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

//     left - The current floor of the left elevator
//     right - The current floor of the right elevator
//     call - The floor that called an elevator

// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

// function takes 3 params, each a number, always valid 0-2 numbers, no letters, etc
// return string 'left' or 'right'

// function elevator(left, right, call)
    // var to hold the difference between left and call
    // var to hold the difference between right and call
    // convert differences to positive num (0 - 2 wont be -2)
    // if leftCallDifference < rightCallDifference
    // return 'left'
    // else
    // return 'right'

function elevator (left, right, call) {
    let leftDiff = left - call
    let rightDiff = right - call

    if (Math.abs(rightDiff) > Math.abs(leftDiff)) {
        return 'left'
    } else {
        return 'right'
    }
}
 

const elevator = (left, right, call) => {
    return Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'
}