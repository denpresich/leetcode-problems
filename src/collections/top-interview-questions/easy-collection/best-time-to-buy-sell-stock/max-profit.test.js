const { maxProfit } = require("./max-profit");

describe("maxProfit", () => {
  it("should return 7 for prices [7,1,5,3,6,4]", () => {
    // arrange
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 7;

    // act
    const actual = maxProfit(prices);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return 4 for prices [1,2,3,4,5]", () => {
    // arrange
    const prices = [1, 2, 3, 4, 5];
    const expected = 4;

    // act
    const actual = maxProfit(prices);

    // assert
    expect(actual).toEqual(expected);
  });
  it("should return 0 for prices [7,6,4,3,1]", () => {
    // arrange
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;

    // act
    const actual = maxProfit(prices);

    // assert
    expect(actual).toEqual(expected);
  });
});
