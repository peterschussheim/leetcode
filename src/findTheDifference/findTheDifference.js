/* @flow */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

Set.prototype.difference = function(setB: Set<string>) {
  let difference = new Set(this)
  for (var elem of setB) {
    difference.delete(elem)
  }
  return [...difference].join()
}

const findTheDifference = (s: string, t: string): string => {
  let setA = new Set(s) /*?*/
  let setB = new Set(t) /*?*/

  if (setA.has(setB)) {
    return [setB].join('')
  }

  let differenceOfAB = setB.difference(setA)
  return differenceOfAB
}

let test = findTheDifference('a', 'aa')
test
