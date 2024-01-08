// Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

/**
 * @param {string[]} arr
 * @returns {string} - The missing letter
 */

function findMissingLetter(arr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
  const startIndex = arr.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabets[startIndex + i]) {
      return alphabets[startIndex + i];
    }
  }
  return "";
}

function findMissingLetter(arr) {
  let startIndex = arr[0].charCodeAt(0);

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - startIndex > 1) {
      return String.fromCharCode(startIndex + i);
    }
    startIndex = current;
  }
  return "";
}

console.log(findMissingLetter(["a", "b", "c", "e", "f", "g", "h"]));
