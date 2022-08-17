const Lookup = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let result = 0;

  for (let index = 0; index < s.length; index++) {
    const num2 = s.substring(index, index + 2);

    if (Lookup[num2]) {
      index++;
      result += Lookup[num2];
      continue;
    } else {
      result += Lookup[s[index]];
    }
  }

  return result;
}

module.exports = { romanToInt };
