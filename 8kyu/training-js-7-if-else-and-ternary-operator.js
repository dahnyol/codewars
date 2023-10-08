// Task:

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs 	price per unit (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90

// You can use if..else or ternary operator to complete it.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code and pass this kata.


// NOTES: saleHotdogs(n) function. n = number of hotdogs bought per customer. certain n intervals have different price deals. 1.00 dollar for < 5 hot dogs. 95 cents per hotdog if buying between 5 and 9. and 10+ hotdogs 90 cents per hotdog.
//P n is positive number
//R return total price spent according to n 
//E
function saleHotdogs(n){
//P // init result var
    // condition comparing n < 5, n >= 5 and n < 10, n >= 10 
    // n * 100 or n * 95 or n * 90
    // return result
}


function saleHotdogs(n){
    let result = 0;
    
    if(n < 5)
      result = n * 100;
    else if(n >= 10)
      result = n * 90;
    else
      result = n * 95;
    
    return result;
}


const saleHotDogs = function(n){
    let result = 0;

    n < 5 ? result = n * 100 : n >= 10 ? result = n * 90 : result = n * 95;

    return result;
}


function saleHotdogs(n){
    return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}


const saleHotdogs = (n) => {
    switch (true) {
      case n < 5: return n * 100;
      case n < 10: return n * 95;
      default: return n * 90;
    }
}