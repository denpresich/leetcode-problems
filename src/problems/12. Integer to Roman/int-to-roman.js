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
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let roman = "";

  for (val in Lookup) {
    while (num >= Lookup[val]) {
      roman += val;
      num -= Lookup[val];
    }
  }

  return roman;
}

module.exports = { intToRoman };
