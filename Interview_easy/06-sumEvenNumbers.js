/**
 * 06. Sum Even Numbers
 *
 * Write a function that returns the sum of all even numbers in an array.
 *
 * Examples:
 * sumEvenNumbers([1, 2, 3, 4, 5, 6]) -> 12
 * sumEvenNumbers([1, 3, 5]) -> 0
 */

function sumEvenNumbers(numbers) {
    const evenNum = numbers
        .filter(i => i % 2 === 0)
        .reduce((acc, valor) => {
        return acc + valor
        }, 0)
    
    return evenNum
}

const numbersTest = [3, 4, 1, 7, 8, 5, 2]
console.log(sumEvenNumbers(numbersTest))

