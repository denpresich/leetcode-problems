const { threeSumClosest } = require("./three-sum-closest");

describe("16. 3Sum Closest", () => {
  it("should return 2 for nums = [-1,2,1,-4], target = 1", () => {
    // arrange
    const nums = [-1, 2, 1, -4];
    const target = 1;

    const expectedResult = 2;

    // act
    const actualResult = threeSumClosest(nums, target);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 0 for nums = [0,0,0], target = 1", () => {
    // arrange
    const nums = [0, 0, 0];
    const target = 1;

    const expectedResult = 0;

    // act
    const actualResult = threeSumClosest(nums, target);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
