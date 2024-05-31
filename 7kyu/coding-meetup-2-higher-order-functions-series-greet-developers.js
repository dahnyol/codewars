// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// The input array will always be valid and formatted as in the example above.
 
//P parameter is an array of objects, each object has 3 properties
//R return an array of objects, with the a copy of the same 3 properties + 1 additional property greeting:
//E 
// input: var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// output: 
// [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//       greeting: 'Hi Sofia, what do you like the most about Java?'
//     },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//       greeting: 'Hi Lukas, what do you like the most about Python?'
//     },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//       greeting: 'Hi Madison, what do you like the most about Ruby?'
//     } 
//   ];
//P function greetdevelopers(list)
// create new array to hold result
// iterate over array of objects
// on each loop, add property to current element object -> element[i].propertyName = value
// push current element[i] (which is the object) into the new array
// return new array 

function greetDevelopers(list) {
    let newArr = []

    for(let i = 0; i < list.length; i++){
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?` // add the property greeting to the object
        newArr.push(list[i]) // push all properties
    }
    return newArr
}

const greetDevelopers = list => list.map(dev => (
    {...dev, //create object and populate with existing properties
        greeting:`Hi ${dev.firstName}, what do you like the most about ${dev.language}?` // add property
    }
))

function greetDevelopers(list){
   let newArr = []

   list.forEach((dev) => {
        dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
        newArr.push(dev)
   })
   return newArr
}

function greetDevelopers(list){
    return list.map((dev) => {
        dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?` // add greeting property
        return dev; // returns copy of original array + added property
    })
}