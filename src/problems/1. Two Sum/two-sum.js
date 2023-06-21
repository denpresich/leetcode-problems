/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  let foundIndex1 = null;
  let foundIndex2 = null;

  for (let index1 = 0; index1 < nums.length; index1++) {
    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      if (target === nums[index1] + nums[index2]) {
        foundIndex1 = index1;
        foundIndex2 = index2;
        break;
      }
    }

    if (foundIndex1 !== null && foundIndex2 !== null) break;
  }

  return [foundIndex1, foundIndex2];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumV2(nums, target) {
  const indexByValue = {};

  for (let index = 0; index < nums.length; index++) {
    if (indexByValue[nums[index]] >= 0) {
      return [indexByValue[nums[index]], index];
    }
    indexByValue[target - nums[index]] = index;
  }
}

module.exports = {
  twoSum,
  twoSumV2,
};
