/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * Difficulty: Easy
 *
 * Given an integer `x`, return `true` if `x` is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 * - For example, `121` is palindrome while `123` is not.
 */

function isPalindrome(x) {
    
  const str = String(Math.abs(x));
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}

const res = isPalindrome(233);
console.log(res);
