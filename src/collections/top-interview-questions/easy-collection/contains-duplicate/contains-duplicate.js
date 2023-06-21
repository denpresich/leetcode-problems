/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const values = {};

  let result = false;

  for (let index = 0; index < nums.length; index++) {
    if (values[nums[index]]) {
      result = true;
      break;
    }

    values[nums[index]] = true;
  }

  return result;
}

module.exports = { containsDuplicate };
