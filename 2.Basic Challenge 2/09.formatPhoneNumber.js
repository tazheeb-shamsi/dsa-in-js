// Write a function called formatPhoneNumber that takes in an array of numbers and returns a string representing the phone number formed by concatenating the numbers in the specified format.

// Examples:
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);  =>"(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]);  =>"(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);  =>"(345) 501-2527"

/**
 * Returns a string representing a phone number.
 * @param {number []} numbers — The numbers to use in the phone number.
 * @returns { string } - The formatted phone number.
 */

function formatPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6).join("");
  return `(${areaCode})${prefix}-${lineNumber}`;
}

//OR

function formatPhoneNumbr(numbers) {
  const formatted = numbers.join("");
  return `(${formatted.substring(0, 3)})${formatted.substring(3, 6)}-${formatted.substring(6)}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
console.log(formatPhoneNumbr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumbr([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formatPhoneNumbr([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
