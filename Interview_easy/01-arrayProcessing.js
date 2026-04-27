/*
Task 1 — Array Processing

Given an array of numbers:
const numbers = [3, 7, 2, 9, 4, 7, 3];

Requirements:
- Remove duplicates
- Sort in ascending order
- Return only even numbers
*/

function arrayProcess(numbers) {
    const newArray = [...new Set(numbers)].sort().filter(i => i % 2 === 0)
    return newArray
}

const arr = [3, 4, 1, 2, 8, 9, 2]
console.log(arrayProcess(arr))






/*
    ... spread operator its make a copy of the array
    [...new Set()] -> Sort remove all duplicates
    .sort((a, b) => a - b) -> have a function inside that verified each number like that
        if a - b = negative, it means b comes after a and so on
    .filter() -> will filter each number checking if have rest 0
*/