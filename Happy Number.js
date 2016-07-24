// 202. Happy Number

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var squareSums = [n];
    while (n !== 1) {
        n = squareSum(n);
        // check this square sum num exists or not.
        var isSquareSumApeared = squareSums.indexOf(n) > -1;
        if (isSquareSumApeared) return false;
        squareSums.push(n);
    }
    return true;
};

var squareSum = function(n) {
    var sum = 0;
    while (n > 0) {
        var lastDigit = n % 10;
        sum += lastDigit * lastDigit;
        n = Math.floor(n / 10);
    }
    return sum;
}