var isAlphaNumeric = function (char) {
  const code = char.charCodeAt(0);
  const isDigit = code >= 48 && code <= 57;
  const isLowercase = code >= 97 && code <= 122;
  const isUppercase = code >= 65 && code <= 90;

  return isDigit || isLowercase || isUppercase;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left].toLowerCase();
    const rightChar = s[right].toLowerCase();

    if (!isAlphaNumeric(leftChar)) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(rightChar)) {
      right--;
      continue;
    }

    if (leftChar !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

module.exports = { isPalindrome };
