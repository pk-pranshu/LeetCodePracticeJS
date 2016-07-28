// 326. Power of Three

// Given an integer, write a function to determine if it is a power of three.


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n===1)
        return true;
    if(n===0 || n%3 >0)
        return false;
    return isPowerOfThree(n/3);        
};
