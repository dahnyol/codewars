// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(kmph) {
    const CENTIMETER_PER_SECOND = kmph * 27.7778;
    return Math.floor(CENTIMETER_PER_SECOND);
}

const cockroachSpeed = s => Math.floor(s/0.036);