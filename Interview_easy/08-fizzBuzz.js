/**
 * 08. FizzBuzz
 *
 * Write a function that returns an array from 1 to n.
 * For multiples of 3, add "Fizz".
 * For multiples of 5, add "Buzz".
 * For multiples of both 3 and 5, add "FizzBuzz".
 *
 * Examples:
 * fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
 * fizzBuzz(15) -> [..., 14, "FizzBuzz"]
 */

function fizzBuzz(n) {
    let arr = []

    for (let i = 1; i <= n; i++) {
        let value = ""

        if (i % 3 === 0) value += "Fizz"
        if (i % 5 === 0) value += "Buzz"

        arr.push(value || i)
    }

    return arr
}