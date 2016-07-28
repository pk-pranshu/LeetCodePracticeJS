// 342. Power of Four

// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num===1)
        return true;
    if(num===0 || num%4 >0)
        return false;
        
    return isPowerOfFour(num/4);    
};