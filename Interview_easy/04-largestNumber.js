/**
 * 04. Largest Number
 *
 * Write a function that returns the largest number in an array.
 *
 * Examples:
 * largestNumber([3, 8, 2, 10, 4]) -> 10
 * largestNumber([-5, -2, -10]) -> -2
 */

function largestNumber(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > result) {
            result = numbers[i]
        }
    }
    return result
}

function largestMax(num) {
    const res = Math.max(...num)
    return res
}

const list = [3, 4, 2, 1, 4, 5]
console.log(largestNumber(list))
console.log(largestMax(list))


