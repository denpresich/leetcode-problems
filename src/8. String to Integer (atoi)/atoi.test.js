const { myAtoi } = require("./atoi");

describe("8. String to Integer (atio)", () => {
  it("should return 42 for '42'", () => {
    // arrange
    const s = "42";

    const expectedResult = 42;

    // act
    const actualResult = myAtoi(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return -42 for '   -42'", () => {
    // arrange
    const s = "   -42";

    const expectedResult = -42;

    // act
    const actualResult = myAtoi(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 4193 for '4193 with words'", () => {
    // arrange
    const s = "4193 with words";

    const expectedResult = 4193;

    // act
    const actualResult = myAtoi(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 0 for '00000-42a1234'", () => {
    // arrange
    const s = "00000-42a1234";

    const expectedResult = 0;

    // act
    const actualResult = myAtoi(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 0 for '   +0 123'", () => {
    // arrange
    const s = "   +0 123";

    const expectedResult = 0;

    // act
    const actualResult = myAtoi(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
