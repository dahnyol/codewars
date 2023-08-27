// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

//note: given an array a and value x, check whether array a has value x. array can be number or strings, x can be either. return true or false
//P array and value, can be number or string.
//R true or false returned if array has value
//E
function checkVal(array, x){
//P //iterate over array
    //for loop or includes
    //each loop check if array[i] == x , since can be string or num use == to check value but not type
    //return T if condition is found else false
}

function check(a, x) {
    return a.includes(x);
}


function check(a,x){
    return a.indexOf(x) > -1 ? true : false;
};


function check(a,x){
    let result = false;
    for(i = 0; i < a.length; i++){
      if(a[i]==x){
      result  = true;
      }
    }
    return result;
};