/**
 * 387. First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * Difficulty: Easy
 *
 * Given a string, find the first non-repeating character and return its index.
 * If it does not exist, return `-1`.
 *
 * Examples:
 * firstUniqueChar("leetcode") -> 0
 * firstUniqueChar("loveleetcode") -> 2
 * firstUniqueChar("aabb") -> -1
 */

function firstUniqueChar(s) {
    const frequency = new Map();

    // Conta quantas vezes cada caractere aparece
    for (const char of s) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }

    // Encontra o primeiro caractere com frequência 1
    for (let i = 0; i < s.length; i++) {
        if (frequency.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}
