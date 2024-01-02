// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    // if value is a string, return an error
    if(typeof x === 'string'){
      return `Error`
    }
    // value multiplied by 50, increase by 6
    return (x * 50) + 6;
}

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;