// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.
// Task

// Fix the bug so we can all go home early.
// Notes

// String str will never be null.

// var replaceDots = function(str) {
//   return str.replace(/./, '-');
// }
var replaceDots = function(str) {
  return str.replace(/\./g,'-');
}

let replaceDots = function(str) {
  return str.split('.').join('-');
}

let replaceDots = str => str.split('.').join('-');

let replaceDots = str => str.replaceAll(".", "-");

let replaceDots = function(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    answer += (str[i] !== ".") ? str[i] : "-";
  }
  return answer;
}