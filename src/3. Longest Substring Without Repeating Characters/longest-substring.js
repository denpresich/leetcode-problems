/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const positions = {};
  let startIndex = 0;
  let maxLength = 0;

  for (let index = 0; index < s.length; index++) {
    const value = s[index];

    if (positions[value] !== undefined && positions[value] >= startIndex) {
      maxLength = Math.max(maxLength, index - startIndex);
      startIndex = positions[value] + 1;
    }

    positions[value] = index;
  }

  return Math.max(maxLength, s.length - startIndex);
}

module.exports = { lengthOfLongestSubstring };
