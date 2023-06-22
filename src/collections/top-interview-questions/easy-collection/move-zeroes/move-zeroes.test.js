const { moveZeroes } = require("./move-zeroes");

describe("move-zeroes", () => {
  it("should return [1,3,12,0,0] for [0,1,0,3,12]", () => {
    // arrange
    const nums = [0, 1, 0, 3, 12];
    const expected = [1, 3, 12, 0, 0];

    // act
    moveZeroes(nums);

    // assert
    expect(nums).toEqual(expected);
  });

  it("should return [0] for [0]", () => {
    // arrange
    const nums = [0];
    const expected = [0];

    // act
    moveZeroes(nums);

    // assert
    expect(nums).toEqual(expected);
  });

  it("should return [1,1,0] for [1,0,1]", () => {
    // arrange
    const nums = [1, 0, 1];
    const expected = [1, 1, 0];

    // act
    moveZeroes(nums);

    // assert
    expect(nums).toEqual(expected);
  });
});
