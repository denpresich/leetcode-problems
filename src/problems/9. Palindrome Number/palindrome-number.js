/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  let result = 0,
    initial = 0;

  initial = x;

  while (x > 0) {
    const num = x % 10;
    result = result * 10 + num;

    x = parseInt(x / 10);
  }

  return result === initial;
}

module.exports = { isPalindrome };
