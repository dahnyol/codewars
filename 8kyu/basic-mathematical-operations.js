// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//note: function that can do 4 math opeations, will take 3 inputs, operation: string/char. value1 and value2 are numbers. return the result of numbers after applying the operation input.
//P 3 inputs: string/num/num
//R result of return num string num
//E
function doMath(operator, value1, value2){
//P // switch case or else if checking each operator with + - / x
    // when it matches, operate on the value1 and value2
    // return the result
}


function basicOp(operation, value1, value2) {
    let result;
    switch(operation){
        case '+': result = value1 + value2;
        break;
        case '-': result = value1 - value2;
        break;
        case '/': result = value1 / value2;
        break;
        case 'x':
        case 'X':
        case '*':
            result = value1 * value2;
            break;
    }
    return result;
}


function basicOp(operation, value1, value2){
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}


function basicOp(operation, value1, value2){
    let output = '';
    let val1 = +value1;
    let val2 = +value2;
    if(operation === '+'){
        output = val1+val2;
    } else if(operation === '-'){
        output = val1-val2;
    } else if(operation === '*' || operation === 'x'){
        output = val1*val2;
    } else if (operation === '/'){
        output = val1/val2;
    }
    return output;
}


function basicOp(operation, value1, value2){
  let cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}


const basicOperations = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
};
  
const basicOp = (op, x, y) => basicOperations[op](x, y)