// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

//P an integer limited to the numbers between 1 and 10
//R a string which contains the multiplication table for the input value from 1 to 10
//each table should be separated by line breaks \n

//E assert.strictEqual(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
 //   assert.strictEqual(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');

// a multiplication table (string) for number == 5 looks like below:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

//P: Create a loop that counts to 10. On each loop, create equation and it to an array. return the array as a string formatted with newlines for each equation (.join \n)  

function multiTable(number){
    let numArr = []
    
    for (let i = 1; i <= 10; i++){
        numArr.push(`${i} * ${number} = ${i*number}`)
      
    }
    return numArr.join('\n')
}




// notes: function takes number, will return a multiplication table from 1 to 10 * input number.
//P input is an integer
//R return a string that is the multiplication table int * 1 - 10
//E
function multiTable(int){
//P // init empty string variable for result
    // init loop counting from 1 to 10
    // on each loop the current count * int
    // return a formatted string in the style of a multiplication table
}


function multiTable(number){
    let result = []
    for (let i = 1; i <= 10; i++){
        result.push(`${i} * ${number} = ${i * number}`)
    }
    return result.join('\n');
}


const multiTable = number => [...Array(10)].map((_, index) => 
    `${++index} * ${number} = ${index * number}`).join('\n');