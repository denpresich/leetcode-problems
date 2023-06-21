const { findMedianSortedArrays } = require("./median");

describe("4. Median of Two Sorted Arrays", () => {
  test("should return 2 for nums1 = [1,3], nums2 = [2]", () => {
    // arrange
    const nums1 = [1, 3];
    const nums2 = [2];
    const expectedResult = 2;

    // act
    const actualResult = findMedianSortedArrays(nums1, nums2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return 2.5 for nums1 = [1,2], nums2 = [3,4]", () => {
    // arrange
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const expectedResult = 2.5;

    // act
    const actualResult = findMedianSortedArrays(nums1, nums2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return 1 for nums1 = [], nums2 = [1]", () => {
    // arrange
    const nums1 = [];
    const nums2 = [1];
    const expectedResult = 1;

    // act
    const actualResult = findMedianSortedArrays(nums1, nums2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return 1 for nums1 = [2], nums2 = []", () => {
    // arrange
    const nums1 = [2];
    const nums2 = [];
    const expectedResult = 2;

    // act
    const actualResult = findMedianSortedArrays(nums1, nums2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return 0 for nums1 = [0,0,0,0,0], nums2 = [-1,0,0,0,0,0,1]", () => {
    // arrange
    const nums1 = [0, 0, 0, 0, 0];
    const nums2 = [-1, 0, 0, 0, 0, 0, 1];
    const expectedResult = 0;

    // act
    const actualResult = findMedianSortedArrays(nums1, nums2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
