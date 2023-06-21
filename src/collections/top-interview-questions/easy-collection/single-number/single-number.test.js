const { singleNumber } = require("./single-number");

describe("single-number", () => {
  it("should return 1 for [2,2,1]", () => {
    // arrange
    const nums = [2, 2, 1];
    const expected = 1;

    // act
    const actual = singleNumber(nums);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return 4 for [4,1,2,1,2]", () => {
    // arrange
    const nums = [4, 1, 2, 1, 2];
    const expected = 4;

    // act
    const actual = singleNumber(nums);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return 1 for [1]", () => {
    // arrange
    const nums = [1];
    const expected = 1;

    // act
    const actual = singleNumber(nums);

    // assert
    expect(actual).toEqual(expected);
  });
});
