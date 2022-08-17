const { romanToInt } = require("./roman-to-int");

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

describe("13. Roman to Integer", () => {
  it("should return 3 for s = 'III'", () => {
    // arrange
    const s = "III";

    const expectedResult = 3;

    // act
    const actualResult = romanToInt(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 58 for s = 'LVIII'", () => {
    // arrange
    const s = "LVIII";

    const expectedResult = 58;

    // act
    const actualResult = romanToInt(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 1994 for s = 'MCMXCIV'", () => {
    // arrange
    const s = "MCMXCIV";

    const expectedResult = 1994;

    // act
    const actualResult = romanToInt(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
