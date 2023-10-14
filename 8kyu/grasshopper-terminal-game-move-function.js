// Terminal game move function

// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:

// move(3, 6) should equal 15


// NOTES: kata writing difficult to understand -- player starts at a given position input, and takes in one dice input. return the position which is moving from the given position by the dice roll input * 2 / moves twice the value of the roll. so the example given position is 3, and given 6 it is twice teh value so 12. so position 3 moved 12 spaces (dice roll of 6 * 2) to equal 15.
//P 2 inputs, one input is the current position, one put is the dice input you will double
//R return one number to represent dice roll * 2
//E
function move(currentPosition, diceRoll){
//P // return currentPosition + (diceRoll*2)
}


function move (position, roll) {
    return position + (roll * 2);
}