//! Write a function called arraylntersection that takes in two arrays and returns an array containing the intersection of the two input.
// arrays (i.e., the common elements that appear in both arrays).

/**
 *
 * @param {number[]} arr1 - The first array
 * @param {number[]} arr2  - The second array
 * @return {number[]}  - Array having the numbers which is common in arr1 and arr2.
 */
function arraylntersection(arr1, arr2) {
  let intersectionArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionArray.includes(arr1[i])) {
      intersectionArray.push(arr1[i]);
    }
  }
  return intersectionArray;
}
console.log(arraylntersection([1, 2, 3, 4, 5], [3, 4, 8, 2, 6]));
