const MIN_VALUE = -Math.pow(2, 31);
const MAX_VALUE = Math.pow(2, 31) - 1;

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const isNegativeValue = x < 0;
  const numberString = isNegativeValue ? (-x).toString() : x.toString();

  const reversedNumberString = numberString.split("").reduce((acc, value) => {
    return value + acc;
  }, "");

  const resultNumberString = isNegativeValue ? "-" + reversedNumberString : reversedNumberString;

  const result = Number(resultNumberString);

  return result >= MIN_VALUE && result <= MAX_VALUE ? result : 0;
}

module.exports = { reverse };
