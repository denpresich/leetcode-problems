/**
 * Solution #1
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// function rotate(nums, k) {
//   const places = {};

//   // Compose new placements
//   for (let index = 0; index < nums.length; index++) {
//     const next_index = (index + k) % nums.length;

//     places[next_index] = nums[index];
//   }

//   // update the existing nums array
//   for (let index = 0; index < nums.length; index++) {
//     nums[index] = places[index];
//   }
// }

/**
 * Solution #2
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place intead
 */
function rotate(nums, k) {
  const places = {};

  for (let index = 0; index < nums.length; index++) {
    const next_index = (index + k) % nums.length;

    // Remember the value
    places[next_index] = nums[next_index];

    // Set new num
    nums[next_index] = places[index] !== undefined ? places[index] : nums[index];
  }
}

module.exports = { rotate };
