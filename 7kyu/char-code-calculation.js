// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

//P parameter will be a string 
//R return a num that represents the difference of sum between charged parameter and original parameter
//E
// total1 = 656667
//               ^
// total2 = 656661
//     
//P function calc(x) {
// 	let xArr = [...x];
// 	let ASCII = [];
// 	let total1 = '';
// 	let counter1 = 0;
// 	let counter2 = 0;
// 	let total2 = '';
//   // loop through the entire array.
// 	for(let i = 0; i < xArr.length; i++) {
//     // convert letters into ASCII code and store them in the ASCII array.
// 		ASCII.push(String(xArr[i].charCodeAt(0)));
//     // join the ASCII character code.
// 		total1 += ASCII[i];
//   // use regex to replace all '7' with '1'.
// 	total2 = total1.replace(/7/g, '1');
//   // add all the 'digits' of total1.
// 	for(let i = 0; i < total1.length; i++) {
// 		counter1 += Number(total1[i]);
//   // add all the 'digits' of total2.
// 	for(let i = 0; i < total2.length; i++) {
// 		counter2 += Number(total2[i]);
//   // return total1 - total2
//  return counter1 - counter2;


function calc(x){
    return Array.from(x) //turn string into array
    .map(c => c.charCodeAt()) //map over array, el.charCodeAt() for code
    .join('') //join array of codes into a string
    .split('') //split the string of codes into an array
    .filter(x => x === '7') //filter out '7'
    .length * 6 //difference in sum 
}

function calc(x){
    const getCharCodes = str => [...str].map(char => char.charCodeAt()).join('')
    
    const sumCharCodes = charCodes => [...charCodes].reduce((total, charCode) => total + parseInt(charCode), 0)
    
    const total1 = getCharCodes(x)
    const total2 = total1.replace(/7/g, '1')
    
    return sumCharCodes(total1) - sumCharCodes(total2)
}

function calc(x){
    let sum = 0;
    let total = x.split("").map(char => {
        return char.charCodeAt();
    }).join("");
    
    total.split("").forEach(num => {
        if (num == '7') {
          sum += 6;
      }
    });
   return sum;
}