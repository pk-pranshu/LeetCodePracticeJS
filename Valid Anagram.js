// 242. Valid Anagram

// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Approach #1 (Sorting)

// Therefore, if t is an anagram of s, sorting both strings will result in two identical strings. 
// Time complexity : O(nlogn). 
// sorting costs O(nlogn) and comparing two strings costs O(n). 
// Sorting time dominates and the overall time complexity is O(nlogn).


//Approach #2 (Hash Table)
// To examine if t is a rearrangement of s, we can count occurrences of each letter in the two strings and compare them. 
// Since both s and t contain only letters from a−z, a simple counter table of size 26 is suffice.
// Do we need two counter tables for comparison? Actually no, because we could increment the counter for each letter in s and decrement the counter for each letter in t, 
// then check if the counter reaches back to zero.
// Time complexity : O(n). Time complexity is O(n) because accessing the counter table is a constant time operation.

// Space complexity : O(1). Although we do use extra space, the space complexity is O(1)
 // because the table's size stays constant no matter how large n is.

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    var newArr = {};
    for (var i = 0; i < s.length; i++) {
       if (newArr[s[i]]) newArr[s[i]]++;
       else newArr[s[i]] = 1;
    }
    for (var i = 0; i < t.length; i++) {
       if (newArr[t[i]]) newArr[t[i]]--;
       else newArr[t[i]] = 1;
    }
    for (var key in newArr) {
        if (newArr[key] > 0) return false;
    }

    return true;
};
} 	