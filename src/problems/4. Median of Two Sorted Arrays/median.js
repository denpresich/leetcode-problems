/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function merge(nums1, nums2) {
  let index1 = 0;
  let index2 = 0;

  const result = [];

  while (nums1[index1] !== undefined || nums2[index2] !== undefined) {
    const value1 = nums1[index1];
    const value2 = nums2[index2];

    if (value2 === undefined || value1 < value2) {
      result.push(value1);
      index1++;
    } else {
      result.push(value2);
      index2++;
    }
  }

  return result;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const nums = merge(nums1, nums2);

  if (nums.length < 2) {
    return nums[0];
  }

  const isLengthEven = nums.length % 2 === 0;

  if (isLengthEven) {
    const index1 = nums.length / 2;
    const index2 = index1 - 1;

    const value1 = nums[index1];
    const value2 = nums[index2];

    return (value1 + value2) / 2;
  } else {
    const index = Math.floor(nums.length / 2);

    return nums[index];
  }
}

module.exports = { findMedianSortedArrays };
