/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  const indexByValue = new Map();

  for (let index = 0; index < nums.length; index++) {
    if (indexByValue.get(nums[index]) >= 0) {
      return [indexByValue.get(nums[index]), index];
    }

    indexByValue.set(target - nums[index], index);
  }
}

module.exports = { twoSum };
