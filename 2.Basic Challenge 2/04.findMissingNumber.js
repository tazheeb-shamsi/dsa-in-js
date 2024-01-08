// Write a function called findMissingumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

/**
 *
 * @param {array} arr
 * @returns {number} - missing number
 */
function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  //  using for loop
  // let actualSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   actualSum += arr[i];
  // }

  // using reduce function
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9]));
