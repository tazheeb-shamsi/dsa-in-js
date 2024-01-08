/**
 *
 * @param {string} str
 * @return {boolean} true if the string is a pallindrome, false otherwise.
 */

// using built-in functions
function isPallindrome(str) {
  const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseString = formattedString.split("").reverse().join("");
  return reverseString === formattedString;
}

// OR

function isPallindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reverseStr = reverseString(formattedStr);
  return reverseStr === formattedStr;
}

// helper functions
function removeNonAlphanumeric(str) {
  let formattedString = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) formattedString += char;
  }
  return formattedString;
}

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Number 0-9
    (code >= 99 && code <= 122) // lower case a-z
  );
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(isPallindrome("12321")); // true
console.log(isPallindrome("Madam")); // true
console.log(isPallindrome("Name")); // false
