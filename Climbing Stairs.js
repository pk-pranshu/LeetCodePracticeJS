// 70. Climbing Stairs

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    var result = 0;
    var stepOne = 1;
    var stepTwo = 2;
    if (n === 1) return stepOne;
    if (n === 2) return stepTwo;

    for (var i = 3; i <= n; i++) {
        result = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = result;
    }

    return result;

};


// var climbStairs = function(n) {
//     var arr = [],
//         i;
    
//     arr[0] = 0;
//     arr[1] = 1;
//     arr[2] = 2;
    
//     for(i = 3; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// };