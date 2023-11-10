// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here
// Examples

// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// note: function that takes a number and will return its appropriate new floor/number. current system begins counting at 1 and will skip 13. change this to start at 0 and not skip 13. its -1 floor less until 13 which then becomes -2,after
//P one number can be negative or 0
//R return number of new floor/value
//E
function getRealFloor(americanFloors){
//P // if americanFloors > 13 , then euFloors = americanFloors - 2;
    // if americanFLoors > 0, then euFloors = americanFloors - 1
    // if americanFloors < 0, then it is the same as americanFloors
    // return the eufloors
}


function getRealFloor(n){
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}


function getRealFloor(n){
    if (n >= 13) return n - 2;
    if (n > 0) return n - 1;
    return n;
}


const getRealFloor = n => n > 0 ? --n - (n >= 13) : n;
//   Between 0 and 13 "n" with its prefix decrementation is reduced by 1.
//   To make it work so that with 13 and above "n" is reduced by 2, a truthy "(n >= 13)" boolean turns into a number 1 which is used to subtract 1 from "n", getting to that -2 in total for "n" 13 and up.
//   Else (0 and lower) return original "n" value.