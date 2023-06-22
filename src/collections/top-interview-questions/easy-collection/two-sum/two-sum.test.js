const { twoSum } = require("./two-sum");

describe("two-sum", () => {
  it("should return [0,1] for nums [2,7,11,15], target = 9", () => {
    // arrange
    const nums = [2, 7, 11, 15],
      target = 9;
    const expected = [0, 1];

    // act
    const actual = twoSum(nums, target);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return [1,2] for nums = [3,2,4], target = 6", () => {
    // arrange
    const nums = [3, 2, 4],
      target = 6;
    const expected = [1, 2];

    // act
    const actual = twoSum(nums, target);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return [0,1] for nums = [3,3], target = 6", () => {
    // arrange
    const nums = [3, 3],
      target = 6;
    const expected = [0, 1];

    // act
    const actual = twoSum(nums, target);

    // assert
    expect(actual).toEqual(expected);
  });
});
