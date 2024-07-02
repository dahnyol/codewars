// Sort Santa's Reindeer

// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
// Notes:

//     It's guaranteed that each string is composed of two words, separated by a single space
//     In case of two identical last names, keep the original order

// Examples

// For this input:

// [
//   "Dasher Tonoyan", 
//   "Dancer Moore", 
//   "Prancer Chua", 
//   "Vixen Hall", 
//   "Comet Karavani",        
//   "Cupid Foroutan", 
//   "Donder Jonker", 
//   "Blitzen Claus"
// ]

// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan", 
//   "Vixen Hall", 
//   "Donder Jonker", 
//   "Comet Karavani",
//   "Dancer Moore", 
//   "Dasher Tonoyan",
// ]

function sortReindeer(reindeerNames) {
    // split each reindeername into first and last names
    return reindeerNames.sort((a, b) => {
        const surnameA = a.split(' ')[1];
        const surnameB = b.split(' ')[1];
        // compare last names with localeCompare
        return surnameA.localeCompare(surnameB);
    })
}
