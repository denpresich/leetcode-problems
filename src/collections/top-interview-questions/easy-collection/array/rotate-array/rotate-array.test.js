const { rotate } = require("./rotate-array");

describe("rotateArray", () => {
  it("should return [5,6,7,1,2,3,4] for nums = [1,2,3,4,5,6,7], k = 3", () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    const expected = [5, 6, 7, 1, 2, 3, 4];

    // act
    rotate(nums, k);

    // assert
    expect(nums).toEqual(expected);
  });

  it("should return [3,99,-1,-100] for nums = [-1,-100,3,99], k = 2", () => {
    // arrange
    const nums = [-1, -100, 3, 99];
    const k = 2;
    const expected = [3, 99, -1, -100];

    // act
    rotate(nums, k);

    // assert
    expect(nums).toEqual(expected);
  });
});
