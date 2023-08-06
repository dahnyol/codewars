// Code as fast as you can! You need to double the integer and return it.

//P num i, +
//R returns num
function doubleInteger(i) {
    i*=2
    return i;
  }

doubleInteger(2) // 4
doubleInteger(8) // 16
doubleInteger(-12) // -24

const doubleInt = i => i+i;

const doubleInt = i => i*2;