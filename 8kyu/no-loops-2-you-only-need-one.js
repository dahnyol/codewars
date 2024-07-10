// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// No Loops 1 - Small enough?

// function expects an array of numbers or strings and a second parameter that will be a number or string.
// return true if the array a contains the second parameter
// check([66, 101], 66), true);
// check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
// check(['t', 'e', 's', 't'], 'e'), true);
// check(['what', 'a', 'great', 'kata'], 'kat'), false);
//function check(a,x){};
// return a.includes(x)

function check(a,x){
    return a.includes(x)
};

function check(a,x){
  return a.some(el => el == x)
};

function check(a,x){
  return a.indexOf(x) >= 0
};

function check(a,x){
    let b = a.filter(el => el == x)
    return b.length ? true : false;
};