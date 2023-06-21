const { containsDuplicate } = require("./contains-duplicate");

describe("contains-duplicate", () => {
  it("should return true for nums = [1,2,3,1]", () => {
    // arrange
    const nums = [1, 2, 3, 1];
    const expected = true;

    // act
    const actual = containsDuplicate(nums);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return false for nums = [1,2,3,4]", () => {
    // arrange
    const nums = [1, 2, 3, 4];
    const expected = false;

    // act
    const actual = containsDuplicate(nums);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return true for nums = [1,1,1,3,3,4,3,2,4,2]", () => {
    // arrange
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const expected = true;

    // act
    const actual = containsDuplicate(nums);

    // assert
    expect(actual).toEqual(expected);
  });
});
