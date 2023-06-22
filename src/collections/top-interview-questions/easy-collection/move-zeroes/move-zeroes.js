/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return;

  let counter = 1;

  for (let index = 1; index < nums.length; index++) {
    const current = nums[index];
    const prev = nums[index - counter];

    if (current !== 0 && prev === 0) {
      nums[index] = prev;
      nums[index - counter] = current;
    } else if (current === 0 && prev === 0) {
      counter++;
    }
  }
};

module.exports = { moveZeroes };
