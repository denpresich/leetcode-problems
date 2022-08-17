/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let maxArea = 0;

  let head = 0;
  let tail = height.length - 1;

  while (head < tail) {
    const headHeight = height[head];
    const tailHeight = height[tail];

    const minHeight = Math.min(headHeight, tailHeight);
    const distance = tail - head;

    const area = minHeight * distance;

    if (area > maxArea) {
      maxArea = area;
    }

    if (headHeight < tailHeight) {
      head++;
    } else {
      tail--;
    }
  }

  return maxArea;
}

module.exports = { maxArea };
