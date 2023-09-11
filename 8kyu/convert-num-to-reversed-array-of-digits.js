// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// note: given random positive number, return the digits in reversed order array. 123 3,2,1
//P positive number input
//R return array of numbers
//E
function reverseDigits(num){
//P // turn num into string toString.()
    // split('') string to turn into array
    // map() to return an array, each number in map reverse().
    // return
    // or turn num into string
    // turn string into array
    // reverse array
    // init answer variable
    // loop over length of array, each time push that num into answer variable
    // return answer
}


function digitize(n) {
    return n.toString().split('').map(Number).reverse();
}


function digitize(n) {
    return String(n).split('').reverse().map(Number)
}


digitize = n => [...String(n)].map(Number).reverse() 


function digitize(n) {
    return (n+'').split('').reverse().map(n => +n);
}

// without map
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}


const digitize = (x) => {
    x = `${x}`.split('').reverse();
    
    let a = []
    
    for(let i = 0; i < x.length; i++){
      a.push(+x[i])
    }
    return a
}