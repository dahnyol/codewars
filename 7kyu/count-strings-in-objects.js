// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
  //returns 3

function strCount(obj){
    //var to hold count of str
    //for in loop trhough object
    //check if current property value is a string
    //if yes, add count++
    //check if current property value is an object
    //if yes, recursively run the fn with the parameter of the current property which is an object, add the result of that recursive fn to the count
    // return count
}

function strCount(obj) {
  let count = 0;
  
  for (key in obj) {
    if (typeof obj[key] == 'string') {
      count++
    }
    if (typeof obj[key] == 'object') {
      count += strCount(obj[key])
    }
  }
  return count
}


// JSON stringify
function strCount(obj){
  let temp = 0;
  JSON.stringify(obj,(key,value)=>{
      if (typeof value === 'string') {
          temp++
      }
      return value;
  })

  return temp
}