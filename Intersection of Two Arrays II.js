// 350. Intersection of Two Arrays II

// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map={};
    var newArr=[];
    for(var i=0;i<nums1.length;i++){
        if(map[nums1[i]])
            map[nums1[i]]++;
        else
            map[nums1[i]]=1;
    }
    
    for(var j=0;j<nums2.length;j++){
        if(map[nums2[j]] && map[nums2[j]]>0)
            newArr.push(nums2[j]);
            map[nums2[j]]--;
    } 
    return newArr;
};