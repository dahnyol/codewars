// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//P an array of integers
//R return string 'odd' or 'even'
//E assert.strictEqual(oddOrEven([0]), 'even')
// assert.strictEqual(oddOrEven([1]), 'odd')
// assert.strictEqual(oddOrEven([]), 'even')
// it('Even tests', () => {
// assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
// assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
// assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
// assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
// assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
// assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
// it('Odd tests', () => {
// assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
// assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
// assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
// it('Negative Odd tests', () => {
// assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
// assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
// assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')

//P function to find the sum of the array given. use modulus or method to check the sum number and return string 'odd' or 'even'.

function oddOrEven(array) {
    let sum = array.reduce((a,b) => a + b, 0)   
    // sum % 2 will evaluate true if has a remainder
    if(sum % 2) {
        return 'odd'
    } else {
        return 'even'
    }
}

const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even'