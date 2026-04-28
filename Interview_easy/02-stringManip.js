/*
Task 2 — String Manipulation

Write a function:
function countVowels(str) {}

Requirements:
- Count how many vowels (a, e, i, o, u) exist
- Ignore case
- Return the count
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
