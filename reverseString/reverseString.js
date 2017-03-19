/**
 * @param {string} s
 * @return {string}
 */

const reverseString = s => Array.from(s).reverse().join('')

let test = 'hello'
let reversed = reverseString(test)
console.log(reversed);
