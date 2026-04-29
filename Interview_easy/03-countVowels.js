/**
 * 03. Count Vowels
 *
 * Write a function that receives a string and returns how many vowels it contains.
 * Consider the vowels: a, e, i, o, u.
 * Ignore uppercase/lowercase differences.
 *
 * Examples:
 * countVowels("hello") -> 2
 * countVowels("JAVASCRIPT") -> 3
 * countVowels("") -> 0
 */

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const lowerStr = str.toLowerCase()
    let count = 0

    for (let i of lowerStr) {
        if(vowels.includes(i))
            count++
    }

    return count
}

let word = 'caBelo'
console.log(countVowels(word))


