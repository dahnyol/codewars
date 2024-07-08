// Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// two parameters of number types, first is starting count number and add increments by the first number. second parameter is the max number to increment up to.
// return a single number total or invalid 
// function sumMul(n,m){
// let res = 0
// if (m < 0) return 'INVALID'
// for(let i = n; i < m; i+n){
    // res += i
// return res
// reduce function

function sumMul(n,m){
    let result = 0;
    if(m <= n) return 'INVALID'
    
    for(let i = n; i < m; i +=n){
      result += i
    }
    return result
  }

const sumMul = (n, m) =>
    m <= 0
    ? "INVALID"
    : Array.from({ length: m })
    .reduce((acc, _, index) => (index % n === 0 ? acc + index : acc),0)


function sumMul(n,m){
    let result = 0;
    let counter = 0
    if (n >= m) return 'INVALID'
    for (let i = 0;i < m; i++){
      counter =  i * n ;
      if (counter >= m ) return result
      result =  result + counter
    }
    return result
  }