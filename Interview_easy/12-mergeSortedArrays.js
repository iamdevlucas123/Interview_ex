/**
 * 12. Merge Sorted Arrays
 *
 * Write a function that receives two sorted arrays and returns a single sorted array.
 *
 * Examples:
 * mergeSortedArrays([1, 3, 5], [2, 4, 6]) -> [1, 2, 3, 4, 5, 6]
 * mergeSortedArrays([1, 2], []) -> [1, 2]
 */

function mergeSortedArrays(first, second) {
    const merged = [...first, ...second].sort((a, b) => a - b)
    return merged
}

const firstList = [1, 2, 4, 6, 8]
const secondList = [3, 7, 9, 10]

console.log(mergeSortedArrays(firstList, secondList))
