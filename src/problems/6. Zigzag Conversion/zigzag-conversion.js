/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  const values = [];

  let charIndex = 0;
  let rowIndex = 0;
  let goesDown = true;

  while (charIndex < s.length) {
    const value = s[charIndex];

    if (values[rowIndex] === undefined) {
      values[rowIndex] = [];
    }

    values[rowIndex].push(value);

    if (rowIndex === numRows - 1) {
      goesDown = false;
    } else if (rowIndex === 0) {
      goesDown = true;
    }

    if (numRows !== 1) {
      rowIndex += goesDown ? 1 : -1;
    }

    charIndex++;
  }

  const result = values.reduce((acc, value) => acc + value.join(""), "");

  return result;
}

module.exports = { convert };
