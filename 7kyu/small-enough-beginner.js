// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//P first parameter is an array of integers. second parameter is an integers that will represent the limit
//R return true or false 
//E (smallEnough([66, 101], 200), true);
// smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
// smallEnough([101, 45, 75, 105, 99, 107], 107), true);
// smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

//P 
// loop over the first parameter array
// on each loop, check each element of array and compare it to limit parameter. 
// if the current element is >= limit , return false  
// else all elements pass being <= limit, then return true

function smallEnough(a, limit){
   return !a.some((el) => el > limit)
}

function smallEnough(a, limit){
    for(let i = 0; i < a.length; i++){
        if (a[i] > limit) {
            return false
        }     
    }
    return true
}

function smallEnough(a, limit){
    return Math.max(...a) <= limit
}

function smallEnough(a, limit){
    return a.every(x => x <= limit);
}

function smallEnough(a, limit){
    for(let i of a){
      if(i > limit)
        return false;
    }
    return true;
}