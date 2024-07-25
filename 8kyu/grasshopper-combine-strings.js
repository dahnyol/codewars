// Combine strings function

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')

// returns:

// 'James Stevens'

// two parameters will get two strings
// return a string of combined parameter strings
// combineNames('james', 'cameron') // 'james cameron'

function combineNames(firstName,lastName){
    return `${firstName} ${lastName}`
}

const combineNames = (...names) => names.join(' ');