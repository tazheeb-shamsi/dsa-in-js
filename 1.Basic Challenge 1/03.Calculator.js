/**
 *
 * @param {number} num1
 * @param {symbol} operator
 * @param {number} num2
 * @returns {number} result
 */

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator " + operator);
  }
  return result.toFixed(2);
}

console.log(calculator(10, "+", 5));
console.log(calculator(10, "-", 5));
console.log(calculator(10, "*", 5));
console.log(calculator(10, "/", 5));
