/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums = nums.sort((a, b) => a - b);

  let minDiff = null;
  let closestNumber = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        closestNumber = sum;
        break;
      } else if (sum < target) {
        const diff = target - sum;

        if (minDiff === null) {
          minDiff = diff;
          closestNumber = sum;
        } else if (diff < minDiff) {
          minDiff = diff;
          closestNumber = sum;
        }

        j++;
      } else if (sum > target) {
        const diff = sum - target;

        if (minDiff === null) {
          minDiff = diff;
          closestNumber = sum;
        } else if (diff < minDiff) {
          minDiff = diff;
          closestNumber = sum;
        }

        k--;
      }
    }

    if (closestNumber === target) {
      break;
    }
  }

  return closestNumber;
}

module.exports = { threeSumClosest };
