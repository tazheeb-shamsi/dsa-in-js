/**
 *
 * @param {string} str
 * @param {character} char
 * @returns {number} count of character's occurrences
 */

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
console.log(countOccurrences("helLo world", "l")); // 2
