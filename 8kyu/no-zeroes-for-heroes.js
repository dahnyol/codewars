// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

const noBoringZeros = (number) => {
    while(number % 10 === 0 && number !== 0) {
      number = number / 10;
    }
    return number;
}
  
function noBoringZeros(number) {
    if (number === 0) return number;
    if (number%10 === 0 ) return noBoringZeros(number/10);
    else return number;
}  

function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
}