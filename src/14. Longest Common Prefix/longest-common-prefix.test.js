const { longestCommonPrefix } = require("./longest-common-prefix");

describe("14. Longest Common Prefix", () => {
  it("should return 'fl' for strs=['flower', 'flow', 'flight']", () => {
    // arrange
    const strs = ["flower", "flow", "flight"];

    const expectedResult = "fl";

    // act
    const actualResult = longestCommonPrefix(strs);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return '' for strs=['dog', 'racecar', 'car']", () => {
    // arrange
    const strs = ["dog", "racecar", "car"];

    const expectedResult = "";

    // act
    const actualResult = longestCommonPrefix(strs);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
