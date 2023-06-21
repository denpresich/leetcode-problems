const { intersect } = require("./intersect");

describe("intersection of two arrays", () => {
  it("should return [2,2] for nums1 = [1,2,2,1], nums2 = [2,2]", () => {
    // arrange
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const expected = [2, 2];

    // act
    const actual = intersect(nums1, nums2);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return [4,9] for nums1 = [4,9,5], nums2 = [9,4,9,8,4]", () => {
    // arrange
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const expected = [9, 4];

    // act
    const actual = intersect(nums1, nums2);

    // assert
    expect(actual).toEqual(expected);
  });
});
