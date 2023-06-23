/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, -1);
    } else {
      map.set(char, i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.get(char) !== -1) {
      return map.get(char);
    }
  }

  return -1;
};

module.exports = { firstUniqChar };
