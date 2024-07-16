// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// round what the square root is to the nearest integer and square that number
// let squareRoot = n ** 0.5 --> half power, square root of anything
// if the decimal place is .5 , round up, else round down
// 

function nearestSq(n) {
    let a = Math.round(Math.sqrt(n))
    return a * a
}

function nearestSq(n){
    let squareRoot = n ** 0.5
    return Math.round(squareRoot) ** 2
}

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)

/*function nearestSq(n){
  let squareRoot = n ** 0.5,
      temp = wholeNumber(squareRoot)
  if (squareRoot - temp >= 0.5) {
    temp++
  }
  return temp ** 2
  console.log(temp)
}

function wholeNumber(squareRoot) {
  let string = squareRoot + '.',
      result = '',
      i = 0
  while (string[i] != '.') {
    result += string[i]
    i++
  }
  return result * 1
}*/