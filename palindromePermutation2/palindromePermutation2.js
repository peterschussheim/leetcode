// @flow

/**
 * @param {string} s
 * @return {string[]}
 */

const generatePalindromes = s => {
  let set = new Set()
  let permutations = new Map()
  let st = Array.from(s.length / 2)
  let char = 0
  let k = 0
  if (!canPermutePalindrome(s, permutations)) {
    return []
  }
  for (let i = 0; i < permutations.length; i++) {
    if (permutations[i] % 2 === 1) ch = i
    for (let j = 0; j < permutations[i]; j++) {
      st[k++] = i
    }
  }
  permute(st, 0, ch)

  return Array.from(set)
}

function canPermutePalindrome(s, map) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    map[s.charAt(i)]++
    if (map[s.charAt(i)] % 2 === 0) {
      count--
    } else {
      count++
    }
  }
  return count <= 1
}

function swap(s, i, j) {
  let temp = s[i]
  s[i] = s[j]
  s[j] = temp
}

function permute(s, l, char) {
  if (l === s.length) {
    set.add(new String(s) + (char === 0 ? '' : char) + new String(s).reverse())
  } else {
    for (let i = l; i < s.length; i++) {
      if (s[l] !== s[i] || l === i) {
        swap(s, l, i)
        permute(s, l + 1, char)
        swap(s, l, i)
      }
    }
  }
}

export default generatePalindromes
