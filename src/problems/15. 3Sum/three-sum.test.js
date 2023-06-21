const { threeSum } = require("./three-sum");

describe("15. Three Sum", () => {
  it("should return [[-1,-1,2],[-1,0,1]] for nums = [-1,0,1,2,-1,-4]", () => {
    // arrange
    const nums = [-1, 0, 1, 2, -1, -4];
    const expectedResult = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    // act
    const actualResult = threeSum(nums);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return [] for nums = [0,1,1]", () => {
    // arrange
    const nums = [0, 1, 1];
    const expectedResult = [];

    // act
    const actualResult = threeSum(nums);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return [[0,0,0]] for nums = [0,0,0]", () => {
    // arrange
    const nums = [0, 0, 0];
    const expectedResult = [[0, 0, 0]];

    // act
    const actualResult = threeSum(nums);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
