/**
 * 07. Remove Duplicates
 *
 * Write a function that returns a new array without duplicated values.
 * Keep the original order of the first occurrences.
 *
 * Examples:
 * removeDuplicates([1, 2, 2, 3, 1, 4]) -> [1, 2, 3, 4]
 * removeDuplicates(["a", "a", "b"]) -> ["a", "b"]
 */

function removeDuplicates(items) {
    const newSet = new Set(items)
    const newArray = [...newSet]
    return newArray
}

const arr = [1, 6, 'f', 9, 3, 4, 'a', 6, 4, 2, 2, 1, 'a']
console.log(removeDuplicates(arr))


