const { convert } = require("./zigzag-conversion");

describe("6. Zigzag Conversion", () => {
  it("should return 'PAHNAPLSIIGYIR' for s = 'PAYPALISHIRING', numRows = 3", () => {
    // arrange
    const s = "PAYPALISHIRING";
    const numRows = 3;

    const expectedResult = "PAHNAPLSIIGYIR";

    // act
    const actualResult = convert(s, numRows);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
  it("should return 'PINALSIGYAHRPI' for s = 'PAYPALISHIRING', numRows = 4", () => {
    // arrange
    const s = "PAYPALISHIRING";
    const numRows = 4;

    const expectedResult = "PINALSIGYAHRPI";

    // act
    const actualResult = convert(s, numRows);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
  it("should return 'A' for s = 'A', numRows = 1", () => {
    // arrange
    const s = "A";
    const numRows = 1;

    const expectedResult = "A";

    // act
    const actualResult = convert(s, numRows);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
