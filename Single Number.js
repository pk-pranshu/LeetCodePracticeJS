// 136. Single Number

// Given an array of integers, every element appears twice except for one. Find that single one.

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(prev,curr){
        return curr ^= prev;
    }); 
};


Method 2 :-


var singleNumber = function(nums) {
    
    nums.sort();
    for(var i = 0; i < nums.length - 1; i = i+2) {
    
        if(nums[i] != nums[i + 1]) return nums[i];
    }
    
    return nums[nums.length - 1];
};