/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let unique_values = 1; // start from 1

  let current_index = 0;
  let next_index = 1;

  while (next_index < nums.length) {
    const current_value = nums[current_index];
    const next_value = nums[next_index];

    if (next_value === "_") {
      break;
    }

    if (current_value === next_value) {
      // replace a number with underscore
      nums[next_index] = "_";
    } else {
      current_index++;

      nums[current_index] = nums[next_index];

      if (current_index !== next_index) {
        nums[next_index] = "_";
      }

      unique_values++;
    }

    next_index++;
  }

  return unique_values;
}

module.exports = { removeDuplicates };
