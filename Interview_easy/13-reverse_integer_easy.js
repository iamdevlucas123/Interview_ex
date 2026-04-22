/**
 * 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * Difficulty: Easy
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-2^31, 2^31 - 1], then return 0.
 */

/*
    32 bits = 2**31
    Math.abs(x) - this is absolute number, the distance from zero, it ignores the sign of number ex: Math.abs(-5) = 5
    Math.pow(base, expoente) - its power of number. Math.pow(2, 3) = 2 ** 3 = 8
    Math.sign(x) - Return the sign of number
        Math.sign(10)    // 1
        Math.sign(-10)   // -1
        Math.sign(0)     // 0
*/

function reverse(x) {
    const num = Math.abs(x).split('').reverse().join('')

    if (num > maxBits) {
        return 0
    }

    return num * Math.sign(x)

}



