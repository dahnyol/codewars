// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"
// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//       case 2:
//         name = 'Venus'
//       case 3:
//         name = 'Earth'
//       case 4:
//         name = 'Mars'
//       case 5:
//         name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         name = 'Uranus'
//       case 8:
//         name = 'Neptune'
//     }    
//     return name;
// }


// to correct the above switch statement, we need to add break; statements after it executes to assign the name variable depending on the case. Without the break statement it will continue to run through each case even if its condition was met earlier.
// changed variable declaration from var to let
function getPlanetName(id){
    let name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    return name;
};


function getPlanetName(id){
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
    }[id] 
    // [id] is the same syntax as extracting an element from an array. In fact [/*empty slot*/, "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"][id] would return the same thing.
    // return [id]
};
// The {1: 'Mercury', ..., 8: 'Neptune'} thing is an object that contains an assignment of all the numbers from 1 to 8 to planet names. The [id] at the end then extracts the value assigned to id from the object. id is the name of the parameter of the function, and the function is meant to work when it's a number from 1 to 8.