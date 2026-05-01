/**
 * 05. Is Palindrome
 *
 * Write a function that checks if a string is a palindrome.
 * A palindrome reads the same forward and backward.
 * Ignore uppercase/lowercase differences and spaces.
 *
 * Examples:
 * isPalindrome("racecar") -> true
 * isPalindrome("Never odd or even") -> true
 * isPalindrome("javascript") -> false
 */

function isPalindrome(text) {
    //removing spaces and uppercases
    const claned = text.toLowerCase().replace(/\s/g, "")
    const reverse = claned.split("").reverse().join("")
    return reverse === claned
}

const str = "JavaScript"
console.log(isPalindrome(str))

