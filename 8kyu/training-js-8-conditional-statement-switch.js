//   Task
  
//   Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
  
//   +---------------+-------------+
//   |    month      |    days     |
//   +---------------+-------------+
//   |1,3,5,7,8,10,12|     31      |
//   +---------------+-------------+
//   |4,6,9,11       |     30      |
//   +---------------+-------------+
//   |2              |     28      |  (Do not consider the leap year)
//   +---------------+-------------+
  
//   Tip: Using default for most of the cases can reduce your work.

//1 parameter for month, month will always be > 0 and <= 12
//return number of days correspondin to the month  , can ignore leap year edge case
//howManydays(1),31);
//howManydays(2),28);
//howManydays(3),31);
//howManydays(4),30);
//howManydays(12),31);
// function howManydays(month){
//     let days;
//     switch (month){
//      case 28: days = 28
//      case 4 6 9 11: days = 30
//      default: days = 31
//     return days;

function howManydays(month){
  let days;
  switch (month){
    case 2: 
        days = 28
        break;
    case 4: case 6: case 9: case 11: 
        days = 30
        break;
    default: 
        days = 31
    break;
  }
  return days;
}


// fall through
function howManydays(month){
    switch (month){
       case 2: return 28
       case 4:
       case 6:
       case 9:
       case 11: return 30
    }
    return 31
}