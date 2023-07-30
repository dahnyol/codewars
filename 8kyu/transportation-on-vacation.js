// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

//Q: for each day, add 40
// if 7 days, minus 50
// if 3 days minus 20
// return total depending on number of days

//P: only whole num(math floor/ceil?), + only, takes 1 argument 
//R: returns dollar amount as a num.
//E:
function rentCar(d){
    //P:
    // variable to hold result.
    // multiply num of days * 40.
    // condition to check if (days >= 7) this check before (days >= 3), if not the function will execute the code for (days >= 3) stop and wont continue to check for (days >= 7).
    // we do not want to stack discounts, (days >= 7) does not get the extra -20 from satisfying (days >= 3).
    // subtract discount 20.
    // condition to check if days > 3.
    // subtract discount 50.
    // return amount; 
}
//testcase
rentCar(2) // 40+40 = 80
rentCar(8) // 40*6 - 50 = 150
rentCar(4) // 40*4 - 20 = 140


function rentalCarCost(d) {
    let dailyCost =  d * 40;

    if(d >= 7)
    dailyCost -= 50;
    else if(d >= 3)
    dailyCost -= 20;
    
    return dailyCost;
}

const rentalCarCost = d => {
    return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0);
}

// seperate operations into its own simple function and use the functions together

function baseCost(days, rate) {
    return days * rate;
}

function discountRate(days) {
    return days >= 7 ? 50 : days >= 3 ? 20 : 0;
}

function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
};

// refactor with encapsulation in mind? put functions together in an object?