// 231. Power of Two

// Given an integer, write a function to determine if it is a power of two.


/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
    while(n>=2){
        if(n%2!==0) return false;
        else
            n=n/2;
    }
    
    if(n===1) return true;
    else
        return false;
};