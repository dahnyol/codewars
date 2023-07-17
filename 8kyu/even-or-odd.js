// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(int) {
    return int % 2 ? 'Odd' : 'Even';
};

const evenOrOdd = int => int % 2 == 0 ? 'Even' : 'Odd';