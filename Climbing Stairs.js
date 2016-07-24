// 70. Climbing Stairs

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var len = s.length,
        map = {},
        result = 0,
        i;
    
    if (len === 0) {
        return 0;
    }
    
    map['I'] = 1;
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;
    
    for (i = 0; i < len; i++) {
        result += map[s.charAt(i)];
        
        if (i > 0 && map[s.charAt(i)] > map[s.charAt(i - 1)]) {
            result -= 2 * map[s.charAt(i - 1)];
        }
    }
    
    return result;
};