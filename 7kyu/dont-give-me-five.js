// Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

//P function has two parameters, the first number is the start and the second parameter will be the end to count to, inclusive and may be negative
//R return a single number that is the count of the numbers from parameter 1 to parameter 2, counting all numbers except those with 5
//E dontGiveMeFive(1,9), 8);
//  dontGiveMeFive(4,17), 12);

//P create variable to hold count
// for loop that will loop from i = parameter 1 until parameter 2
// must check on each loop if the current element/number includes the number 5, so 5, 15, 25, etc, if it does not have it, add +1 to the count
// return the count

function dontGiveMeFive(start, end) {
    let count = 0;
  
    for (let i = start; i <= end; i++){
      if (!String(i).includes('5')) {
          count++;
      }
    }
    return count;
} // O(1)


function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
} // O(n)


// regex
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
}