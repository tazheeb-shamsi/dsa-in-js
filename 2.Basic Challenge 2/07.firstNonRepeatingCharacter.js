// Write a function called findFirstNonRepeatingCharacter that takes in a string and returns the first non-repeating character in the string.
// If there are no non-repeating characters, the function should return null.

/**
 * @param {string} str - The string to find the first non-repeating character
 * @return {string | null} - The first non-repeating character
 */
function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(findFirstNonRepeatingCharacter("aabbcccdeeff"));
