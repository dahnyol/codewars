// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arrayOfN = [];

    for(let i = 1; i <= n; i++){
        arrayOfN.unshift(i);
    }
    return arrayOfN;
};

const reverseSeq = n => {
    let arr = [];

    for( ; n > 0; n--){
      arr.push(n);
    }
    return arr;
};

// Most popular codewars solution
const reverseSeq = n => {
   let arr = [];

   for (let i=n; i>0; i--) {
        arr.push(i);
    } 
    return arr;
};