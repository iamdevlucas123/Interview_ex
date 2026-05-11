/**
 * 11. Count Words
 *
 * Write a function that returns how many words exist in a sentence.
 * Ignore extra spaces at the beginning, end, or between words.
 *
 * Examples:
 * countWords("Hello world") -> 2
 * countWords("   JavaScript   is   awesome   ") -> 3
 * countWords("") -> 0
 */

function countWords(sentence) {
    if (sentence.trim() === "") {
        return 0
    }

    const newSentence = sentence.trim().split(/\s+/).length
    return newSentence
}

const phrase = " Hello  World  ";
console.log(countWords(phrase))



