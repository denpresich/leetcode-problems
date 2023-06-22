/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const values = {};
  let result = 0;

  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];

    if (values[value]) {
      result -= value;
    } else {
      values[value] = true;
      result += value;
    }
  }

  return result;
}

module.exports = { singleNumber };
