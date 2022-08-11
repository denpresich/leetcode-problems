/**
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
  let startIndex = 0;
  let endIndex = s.length - 1;

  let result = true;

  while (startIndex <= endIndex) {
    const startValue = s[startIndex];
    const endValue = s[endIndex];

    if (startValue !== endValue) {
      result = false;
      break;
    }

    startIndex++;
    endIndex--;
  }

  return result;
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let longestPalindrome = "";

  for (let startIndex = 0; startIndex < s.length; startIndex++) {
    for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
      const value = s.substring(startIndex, endIndex + 1);

      if (isPalindrome(value) && value.length > longestPalindrome.length) {
        longestPalindrome = value;
      }
    }
  }

  return longestPalindrome;
}

module.exports = { longestPalindrome };
