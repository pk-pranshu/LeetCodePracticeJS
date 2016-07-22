// 20. Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s===null) return false;
    var stack = [];
    var map={'(':')','[':']','{':'}'};
    var len=s.length;
    var curr,stackTop,i;
    
    for(i=0;i<len;i++){
        curr = s[i];
        if(map.hasOwnProperty(curr))
            stack.push(curr);
        else
            if(stack.length===0) return false;
            else{
                stackTop=stack.pop();
                if(map[stackTop]!==curr){
                    return false;
                }
            }
    }
    if(stack.length===0) 
        return true;
    else
        return false;
};

/*
var isValid = function(s) {
    var top;
    var i=0;
    var curr;
    var stack=[];
    var len = s.length;
    while(i<len){
        curr = s[i];
        if(curr==='[' || curr ==='{' || curr==='(')
            stack.push(curr);
        else{
            top=stack.pop();
            if(top==='(' && curr!==')') return false;
            else if(top==='[' && curr!==']') return false;
            else if(top==='{' && curr!=='}') return false;
            else if(top===undefined) return false;
           } 
        i++;
    }
    return stack.length===0;
};
*/

