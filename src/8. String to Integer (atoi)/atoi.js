const MIN_VALUE = -Math.pow(2, 31);
const MAX_VALUE = Math.pow(2, 31) - 1;

const DigitRegex = /[0-9]{1}/;

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let result = 0;
  let sign = null;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === " " && result === 0 && sign === null) {
      continue;
    }

    if ((char === "-" || char === "+") && sign === null && result === 0) {
      sign = char;

      continue;
    }

    const isDigit = DigitRegex.test(char);

    if (isDigit) {
      if (sign === null) {
        sign = "+";
      }

      if (char === "0" && result === 0) {
        continue;
      }

      result = result * 10 + Number(char);

      continue;
    }

    break;
  }

  result = sign === "-" ? -result : result;

  return Math.min(Math.max(MIN_VALUE, result), MAX_VALUE);
}

module.exports = { myAtoi };
