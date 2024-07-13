// There's a "3 for 2" (or "2+1" if you like) offer on mangoes.
// For a given quantity and price (per mango), calculate the total cost of the mangoes.

// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// function takes two numbers, first num is the number of mangoes bought, second num is the price per mango
// return a number representing total cost of mangoes 
//function mango(quantity, price){
    // let result = 0
    // start count 1, i <= quantity, i++
    // if i % 3 has a remainder
    // result += price
    // return result

function mango(quantity, price) {
    let result = 0;
    
    for(let i = 1; i < quantity.length; i++) {
        if (i % 3) {
            result += price
        }
    }
    return result
}


// use math instead of iterative?
// const mango (quantity, price)
// quantity - freeMangoes * price
// freeMangoes = quantity / 3 , round down math.floor
// using bitwise operators to round down instead of Math.floor for 
// freeMangoes = ( quantity / 3 | 0 ) or (quantity / 3 ^ 0) or ~~(quantity / 3)

function mango(quantity, price) {
    return (quantity - (Math.floor(quantity / 3))) * price
}

function mango(quantity, price) {
    return (quantity - (quantity / 3 | 0)) * price
}

function mango(quantity, price) {
    return (quantity - (quantity / 3 ^ 0)) * price
}

function mango(quantity, price) {
    return (quantity - (~~(quantity / 3))) * price
}