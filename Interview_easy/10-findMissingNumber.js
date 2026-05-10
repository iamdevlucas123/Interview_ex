/**
 * 10. Find Missing Number
 *
 * An array contains unique numbers from 1 to n, but one number is missing.
 * Write a function that returns the missing number.
 *
 * Examples:
 * findMissingNumber([1, 2, 4, 5]) -> 3
 * findMissingNumber([2, 3, 1, 5]) -> 4
 */

function findMissingNumber(numbers) {
    const n = numbers.length + 1
    const expectedSum = (n * (n + 1)) / 2
    const sumArray = numbers.reduce((sum, num) => sum + num, 0)
    return expectedSum - sumArray
}

const arr = [2, 6, 4, 5, 3, 1, 8]
console.log(findMissingNumber(arr))

/*
* Its used to reduce an array in only one number
* .reduce((acumulator, actualElement) => {
    return acumulator}, initialValue)
*/