// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

//P given one or two parameters, will be default 30
//R return number that represents cost of ad formula
//E Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
// Test.assertEquals(billboard("Abishai Charalampos"), 570);
// Test.assertEquals(billboard("Idwal Augustin"), 420);
// Test.assertEquals(billboard("Hadufuns John",20), 260);
// Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
// Test.assertEquals(billboard("Claude Miljenko"), 450);
// Test.assertEquals(billboard("Werner Vígi",15), 165);
// Test.assertEquals(billboard("Anani Fridumar"), 420);

//P: function will take in one or two parameters. the first parameter will be a string which we will count the amount of characters it has, including whitespaces. second parameter represents price, if given input use it else use default 30.
// function will output number of characters in 1st parameter multiplied by price, we cannot use * operator
// if no operation, may need to take length of 1st parameter, iterate loop over each char and price to sum variable. return the sum variable to represent the cost 

function billboard(name, price = 30){
    let sum = 0;
    let length = name.length
    for(let i = 0; i < length; i++){
        sum += price
    }
    return sum
} 


function billboard(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0); 
}


function billboard(name, price = 30){
    return name.length/(1/price)
} 