// Write a function called validateEmait that takes in a string and returns whether the string is a valid email address. For the purposes of this challenge, a valid email address is defined as a string that contains an @ symbol and a . symbol.

/**
 * @param {string} email - The email address to validate
 * @returns {boolean} - Whether the email address is valid
 */
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

//OR

function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }
  const [localPart, domainPart] = email.split("@");
  if (localPart.length === 0 || domainPart.length < 3) {
    return false;
  }
  const domainExtension = domainPart.split(".");
  if (domainExtension.length < 2 || domainExtension[1] < 2) {
    return false;
  }
  return true;
}
console.log(validateEmail("info@tazheeb.com"));
console.log(validateEmail("infotazheeb.com"));
console.log(validateEmail("infotazheeb.@com"));
console.log(validateEmail("info.tazheeb@com"));
