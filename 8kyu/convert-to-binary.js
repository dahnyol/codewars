// Task Overview

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

function toBinary(n){
    //given a non-negative number n
    //convert n toString(2) with base 2 to conver number to its binary representation in a string
    //convert string back to int/number and return
}

const toBinary = n => Number(n.toString(2));

const toBinary = n => +n.toString(2);

