// Complete the function which converts a binary number (given as a string) to a decimal number.

// P parameter will be a string of binary numbers, 0 or 1
// R return a decimal number that is equal to the binary number given
// E function convert('10') // 2
// convert('1001001') // 73
// P if not using parseint
// take the binary string
// starting from the left (start count index 0), double your previous total and add the current digit 
// double your current total and add the next leftmost digit
// repeat the previous step until you have gone through the entire string

function binToDec(bin) {
  return parseInt(bin, 2)
}


function binToDec(bin){
    return bin
      .split('')
      .reverse()
      .reduce((acc, curr, index) => {
          if (curr === '1') acc += 2 ** index;
          return acc;
      }, 0);
}