// Write a function called titteCase that takes in a string and
// returns the string with the first letter of each word capitalized.

/**
 *
 * @param {string} str - String to be capitalized
 * @return {string} - String with the first letter of each word capitalized
 */
function titteCase(str) {
  const word = str.toLowerCase().split(" ");

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
console.log(titteCase("my name is tazheeb"));
console.log(titteCase("My nAmE IS TazHeeb"));
