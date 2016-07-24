// 13. Roman to Integer

// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

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