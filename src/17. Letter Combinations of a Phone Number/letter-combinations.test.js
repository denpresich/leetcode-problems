const { letterCombinations } = require("./letter-combinations");

describe("17. Letter Combinations of a Phone Number", () => {
  it("should return ['ad','ae','af','bd','be','bf','cd','ce','cf'] for digits = '23'", () => {
    // arrange
    const digits = "23";
    const expectedResult = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

    // act
    const actualResult = letterCombinations(digits);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return [] for digits = ''", () => {
    // arrange
    const digits = "";
    const expectedResult = [];

    // act
    const actualResult = letterCombinations(digits);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return ['a', 'b', 'c'] for digits = '2'", () => {
    // arrange
    const digits = "2";
    const expectedResult = ["a", "b", "c"];

    // act
    const actualResult = letterCombinations(digits);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return ['mp', 'mq', 'mr', 'ms', 'np', 'nq', 'nr', 'ns', 'op', 'oq', 'or', 'os'] for digits = '67'", () => {
    // arrange
    const digits = "67";
    const expectedResult = ["mp", "mq", "mr", "ms", "np", "nq", "nr", "ns", "op", "oq", "or", "os"];

    // act
    const actualResult = letterCombinations(digits);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi'] for digits = '234'", () => {
    // arrange
    const digits = "234";
    const expectedResult = [
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ];

    // act
    const actualResult = letterCombinations(digits);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
