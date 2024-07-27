// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// function takes 1 parameter A, a number
// return a number rounded toFixed(2)
// closeTo(squareArea(2), 1.62, 1e-2);
// closeTo(squareArea(2), 1.62, 1e-2);
// function squareArea(A){
// return A.toFixed(2)

const squareArea = a => +Math.pow(2* a / Math.PI, 2).toFixed(2)

function squareArea(A){
    // Calculate the circumference of A 
    const circumference = A * 4;
    
    // Calculate the radius of A
    const radius = circumference / (Math.PI * 2);
    
    // Calculate the area of the square, rounded to 2 decimal places
    const area = Number((radius**2).toFixed(2));
    
    // Return the result
    return area;
}