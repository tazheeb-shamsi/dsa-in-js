/**
 *
 * @param {num1} p
 * @param {num2} q
 * @returns {sum}
 */

function sum(p, q) {
  return p + q;
}
const result = sum((a = 4), (b = 5));
console.log(`sum of ${a} and ${b} is ${result}`);
