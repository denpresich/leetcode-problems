const { reverse } = require("./reverse-integer");

describe("reverse-integer", () => {
  it("should return 321 for 123", () => {
    // arrange
    const num = 123;
    const expectedResult = 321;

    // act
    const actualResult = reverse(num);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return -321 for -123", () => {
    // arrange
    const num = -123;
    const expectedResult = -321;

    // act
    const actualResult = reverse(num);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 21 for 120", () => {
    // arrange
    const num = 120;
    const expectedResult = 21;

    // act
    const actualResult = reverse(num);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
