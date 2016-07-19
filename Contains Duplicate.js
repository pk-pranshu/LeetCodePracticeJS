// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.


/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    var map={};
    for(var i in nums){
        if(map[nums[i]]){
           return true;
        }    
        else{
            map[nums[i]]=true;
        }
    }
  return false;
}    


// Metod 2-

 //var containsDuplicate = function(nums) {
//     var obj = {};
    
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
//         if(obj[nums[i]] > 1) return true;
//     }
    
//     return false;
// }