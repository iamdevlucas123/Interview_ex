/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/
 * Difficulty: Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string `""`.
 */


function longPrefix (array) {
    const str = array.map(item => String(item).split("").map(_, i).slice(0, 2))
    

    console.log(str)
}

let list = ['maca', 'a', 432, 'tamandua', 343, 'macetada', '2', 'Macaco', ]
longPrefix(list)




/**
 * .map(_,i) → Não me importo com o valor, apenas me mostre os indices
 * map() → transforma cada item → volta uma lista
 * reduce() → junta tudo → volta um valor só
 * .slice(inicio, fim) → Cria uma cópia do array
 */