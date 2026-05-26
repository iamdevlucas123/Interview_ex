/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 *
 * Given an integer array, return `true` if any value appears at least twice.
 * Return `false` if every element is distinct.
 *
 * Examples:
 * containsDuplicate([1, 2, 3, 1]) -> true
 * containsDuplicate([1, 2, 3, 4]) -> false
 */

function containsDuplicate(numbers) {
    const check = numbers.length !== new Set(numbers).size
    if (check) {
        return true
    } else return false
}

const arr = [1, 2, 3, 1]
console.log(containsDuplicate(arr))