/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let index = 0; index < s.length / 2; index++) {
    const next_index = s.length - 1 - index;

    const temp = s[index];
    s[index] = s[next_index];
    s[next_index] = temp;
  }
};

module.exports = { reverseString };
