/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  const maxPossible = strs.reduce((acc, str) => Math.min(acc, str.length), strs[0].length);
  let prefix = "";

  for (let index = 0; index < maxPossible; index++) {
    const char = strs[0][index];

    const haveSameChar = strs.every((str) => str[index] === char);

    if (haveSameChar) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
}

module.exports = { longestCommonPrefix };
