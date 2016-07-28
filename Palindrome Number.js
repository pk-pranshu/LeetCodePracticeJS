// 9. Palindrome Number

// Determine whether an integer is a palindrome. Do this without extra space.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('');
};





Method 2 :-


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var a=0;
    var temp=x;
    if(x<0) return false;
    while(temp>0){
        a=a*10+temp%10;
        temp=Math.floor(temp/10);
    }
    if(x===a) return true;
    else return false;
};