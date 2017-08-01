/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

Set.prototype.difference = function(setB) {
  let difference = new Set(this)
  for (var elem of setB) {
    difference.delete(elem)
  }
  return [...difference].join()
}

var findTheDifference = function(s, t) {
  let setA = new Set(s) /*?*/
  let setB = new Set(t) /*?*/

  if (setA.has(setB)) {
    return setB
  }

  let differenceOfAB = setB.difference(setA)
  return differenceOfAB
}

let test = findTheDifference('a', 'aa')
test
