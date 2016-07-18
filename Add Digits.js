258. Add Digits

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};


// var addDigits = function(num) {
//   while (num > 9) {
//     num = getTotal(num);
//   }
//   return num;
// };

// var getTotal = function(num) {
//   var total = 0, dig = 0;
//   while (num > 9) {
//     dig = num % 10;
//     total += dig;
//     num = Math.floor(num / 10);
//   }
//   return total + num;
// };