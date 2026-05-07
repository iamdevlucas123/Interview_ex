/**
 * 09. Capitalize Words
 *
 * Write a function that capitalizes the first letter of every word in a sentence.
 *
 * Examples:
 * capitalizeWords("hello world") -> "Hello World"
 * capitalizeWords("javaScript is fun") -> "JavaScript Is Fun"
 */

function capitalizeWords(sentence) {
    const cap = sentence
        .split(" ")
        .map(palavra => palavra[0].toUpperCase() + palavra.slice(1))
        .join(" ");
    return cap
}

console.log(capitalizeWords("hello world"))

