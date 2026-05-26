/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 *
 * A string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * - Every closing bracket has a matching opening bracket.
 *
 * Examples:
 * isValidParentheses("()") -> true
 * isValidParentheses("()[]{}") -> true
 * isValidParentheses("(]") -> false
 */

function isValidParentheses(text) {
    const stack = [];

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of text) {
        // If it's an opening bracket, add to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If it's a closing bracket
        else {
            const last = stack.pop();

            // Check if the last opening bracket matches
            if (last !== pairs[char]) {
                return false;
            }
        }
    }

    // Stack must be empty for a valid string
    return stack.length === 0;
}

// Examples
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([{}])")); // true
console.log(isValidParentheses("(((")); // false

