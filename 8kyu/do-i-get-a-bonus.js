// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

//note function takes 2 arguments, salary/bonus
//salary is a integer and bonus a bool
//if bonus then multiply salary
//P 2 arg, salary = integer, positive num, bonus = t/f
//R return updated salary
//E
function bonus(salary, bonus)
//P //check condition if bool is true
    //if yes multiply salaryx10 else just salary
    //return the updated salary

//test case
bonus(40000, no) // 40,000
bonus(30000, yes) // 300,000
bonus(1, yes) // 10

const bonusTime = (salary, bonus) => {
   return bonus ? '£' + salary * 10 :  '£' + salary; 
}

//old solution with template literal
function bonusTime(salary, bonus) {
    return bonus ? `£${salary*10}` : `£${salary}`;
}