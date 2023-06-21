const { longestPalindrome } = require("./longest-palindrom-substring");

describe("5. Longest Palindromic Substring", () => {
  it("should return 'bab' for 'babad'", () => {
    // arrange
    const s = "babad";
    const expectedResult = "bab";

    // act
    const actualResult = longestPalindrome(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 'bb' for 'cbbd'", () => {
    // arrange
    const s = "cbbd";
    const expectedResult = "bb";

    // act
    const actualResult = longestPalindrome(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return 'a' for 'a'", () => {
    // arrange
    const s = "a";
    const expectedResult = "a";

    // act
    const actualResult = longestPalindrome(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
