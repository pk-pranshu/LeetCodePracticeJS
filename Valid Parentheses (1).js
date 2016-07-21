// Valid Parentheses (1) - JavaScript

// Given a string of parentheses "{", "}", check if the string is valid parentheses. The brackets must close in the correct order. E.g.: "{{}}" is valid, "}{}{" is not valid.

// Time complexity: O(n)
function isValidParentheses(str) {
	var newArr =[];
	var i=0;
	var l=str.length;   

	if (!l) {
        return true;
    }

    if ((l % 2) !== 0) {
        return false;
    }

    while(i<l){
    	if(str[i]=="{")
    		newArr.push(str[i]);
    	else{
    		if(str[i]=="}"){
    			if(newArr.length){
    				newArr.pop();
    			}
    			else
    				return false;
    		}

    	}
    	i++;
    }

    return true;
}


isValidParentheses("{{{}}}"); // true
isValidParentheses("{{}{}}"); // true
isValidParentheses("{}{{}}"); // true
isValidParentheses("}{}{"); // false