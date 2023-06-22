const { plusOne } = require("./plus-one");

describe("plus-one", () => {
  it("should return [1,2,4] for [1,2,3]", () => {
    // arrange
    const digits = [1, 2, 3];
    const expected = [1, 2, 4];

    // act
    const actual = plusOne(digits);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return [4,3,2,2] for [4,3,2,1]", () => {
    // arrange
    const digits = [4, 3, 2, 1];
    const expected = [4, 3, 2, 2];

    // act
    const actual = plusOne(digits);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return [1, 0] for [9]", () => {
    // arrange
    const digits = [9];
    const expected = [1, 0];

    // act
    const actual = plusOne(digits);

    // assert
    expect(actual).toEqual(expected);
  });
});
