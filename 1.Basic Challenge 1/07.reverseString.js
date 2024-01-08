// Write a function called reverseString that takes in a string and returns the reverse of that string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

// OR

function ReverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("tazheeb"));
console.log(ReverseString("shamsi"));
