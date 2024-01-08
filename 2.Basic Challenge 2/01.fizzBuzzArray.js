/**
 * @param {Array} arr - Array to check
 * @returns {string} - Retutns fizz , buzz , fizzbuzz according to the criteria
 */

function fizzBuzz(arr) {
  const arrr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) arrr.push("FizzBuzz");
    else if (arr[i] % 3 === 0) arrr.push("Fizz");
    else if (arr[i] % 5 === 0) arrr.push("Buzz");
    else arrr.push(arr[i]);
  }
  return arrr;
}
console.log(
  fizzBuzz([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
);
