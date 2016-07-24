// 345. Reverse Vowels of a String

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var map={};
    var arr =[];
    var newArr = s.split('');
    for(var i=0;i<s.length;i++){
        var char = s.charAt(i);
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || char=='A' || char=='E' || char=='I' || char=='O' || char=='U' ){
            map[i] = char;
            arr.push(char);
        }
    }
    for(var key in map){
        newArr[key] = arr.pop();
    }
    return newArr.join('');
};