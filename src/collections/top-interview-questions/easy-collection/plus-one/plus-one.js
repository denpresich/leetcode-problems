/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [];

  let value_increased = false;

  for (let index = digits.length - 1; index >= 0; index--) {
    let next_digit = digits[index];

    // Make an increment only for the last index or after the 0 value
    if (index === digits.length - 1 || value_increased) {
      next_digit += 1;
    }

    // If the digit is higher than 9, set next_ditit to 0 and change the flag
    if (next_digit > 9) {
      next_digit = 0;
      value_increased = true;
    } else {
      value_increased = false;
    }

    result.unshift(next_digit);

    if (index === 0 && value_increased) {
      result.unshift(1);
    }
  }

  return result;
};

module.exports = { plusOne };
