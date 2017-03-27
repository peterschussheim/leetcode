/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/**
 * Parse input strings into 
 */

const complexNumberMultiply = (a, b) => {
  let m = a;
  let n = b;

  [a, b] = m.replace('i', '').split('+')
  let parsed = parseInt(a)
  console.log(parsed);
  let [c, d] = n.replace('i', '').split('+')
  return [...[a, b], ...[c, d]]
  // return (coef[0] * coef[2] - coef[1] * coef[3]) + '+' + (coef[1] * coef[2] + coef[0] * coef[3]) + 'i'
}


let test1 = complexNumberMultiply('1+1i', '1+1i') // '0+2i'
let test2 = complexNumberMultiply('1+-1i', '1+-1i') // '0+-2i'

console.log(test1)
