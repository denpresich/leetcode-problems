/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.get(char) !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = { isAnagram };
