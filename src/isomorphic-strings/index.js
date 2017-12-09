var assert = require('assert')

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(str1, str2) {
  var map = {} /*?*/
  for (var i = 0; i < str1.length; i++) {
    var a = str1[i]
    var b = str2[i]
    if (typeof map[a] === 'undefined') {
      map[a] = b

      // check for error in first tuple ("ABB", "XYZ")
    } else if (map[a] !== b) {
      return false
    }

    // check for error in second tuple ("ABC", "XYY")
    for (var key in map) {
      if (key !== a && b === map[key]) {
        return false
      }
    }
  }
  return map /*?*/
}

let t1 = isIsomorphic('egg', 'add')
console.log(t1)
// assert(isIsomorphic('egg', 'add') == true)
// assert(isIsomorphic('foo', 'bar') == false)
// assert(isIsomorphic('paper', 'title') == true)
