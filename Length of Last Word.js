// 58. Length of Last Word

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// For example, 
// Given s = "Hello World",
// return 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 0) return 0;
    if(!s)return 0;
     s=s.trim();
    if(s.localeCompare("")==0)return 0;
    var newArr = s.split(' ');
    return newArr[newArr.length-1].length;
};