/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 *
 * Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`.
 * Return `false` otherwise.
 *
 * An anagram uses the same letters with the same frequency, but in a different
 * or equal order.
 *
 * Examples:
 * isAnagram("anagram", "nagaram") -> true
 * isAnagram("rat", "car") -> false
 */

function isAnagram(s, t) {
    if (s.length != t.length) {
        return false
    }

    const sorted_s = s.toLowerCase().split('').sort().join()
    const sorted_t = t.toLowerCase().split('').sort().join()
    
    return sorted_s === sorted_t
}

const string1 = 'anagram'
const string2 = 'naGaram'

console.log(isAnagram(string1, string2))
