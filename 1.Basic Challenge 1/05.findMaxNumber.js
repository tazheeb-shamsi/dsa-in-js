/**
 *
 * @param {number[]} array - array of numbers
 * @returns {number} - the largest number in array
 */
function findMaxNumber(arr) {
  return (maxNum = Math.max(...arr));
}
console.log(findMaxNumber([1, 5, 2, 6, 3, 4, 8]));

function findMaxNumberInArray(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxNumberInArray([10, 5, 2, 6, 3, 4, 9]));
