const { intToRoman } = require("./int-to-roman");

describe("12. Integer to Roman", () => {
  it("should return III for num = 3", () => {
    // arrange
    const num = 3;

    const expectedResult = "III";

    // act
    const actualResult = intToRoman(num);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return LVIII for num = 58", () => {
    // arrange
    const num = 58;

    const expectedResult = "LVIII";

    // act
    const actualResult = intToRoman(num);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return MCMXCIV for num = 1994", () => {
    // arrange
    const num = 1994;

    const expectedResult = "MCMXCIV";

    // act
    const actualResult = intToRoman(num);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
