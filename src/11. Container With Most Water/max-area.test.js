const { maxArea } = require("./max-area");

describe("11. Container With Most Water", () => {
  it("should return 49 for height = [1,8,6,2,5,4,8,3,7]", () => {
    // arrange
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    const expectedResult = 49;

    // act
    const actualResult = maxArea(height);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 1 for height = [1,1]", () => {
    // arrange
    const height = [1, 1];

    const expectedResult = 1;

    // act
    const actualResult = maxArea(height);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
