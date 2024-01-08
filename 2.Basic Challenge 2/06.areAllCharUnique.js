// Write a function called areAttCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

/**
 *
 * @param {string} str - The string to check.
 * @return {boolean} - true if all characters in the string are unique.
 */
function isAllCharacterUnique(str) {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (!unique.includes(str.charAt(i))) {
      unique += str.charAt(i);
    } else {
      return false;
    }
  }
  return true;
}

// OR

function isAllCharacterUnique(str) {
  let uniqueChar = {};
  for (const char of str) {
    if (uniqueChar[char]) {
      return false;
    }
    uniqueChar[char] = true;
  }
  return true;
}
console.log(isAllCharacterUnique("tazheeb"));
console.log(isAllCharacterUnique("train"));
