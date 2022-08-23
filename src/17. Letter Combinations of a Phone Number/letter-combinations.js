const NumbersMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits === "") {
    return [];
  }

  if (digits.length === 1) {
    return NumbersMap[digits];
  }

  const nums = NumbersMap[digits[0]];
  const combinations = letterCombinations(digits.slice(1, digits.length));

  const result = [];

  for (const num of nums) {
    for (const combination of combinations) {
      result.push(num + combination);
    }
  }

  return result;
}

module.exports = { letterCombinations };
