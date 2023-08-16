// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

//notes: 25miles/1gal, 2gal left, write function to check if this is enough fuel
//P take a num, which represents miles needed to travel, in this case 50.
//R return a true or false 
//E 
function enoughGas(mile, mpg, fuel){
//P //how many gallons left
    //how many miles left
    //if mile/gal <= 25 return true
}

//test case
enoughGas(50) // true
enoughGas(60) // false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let capacity = fuelLeft * mpg;
    return capacity >= distanceToPump;
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft;
};