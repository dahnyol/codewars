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