const { isPalindrome } = require("./valid-palindrome");

describe("isPalindrome", () => {
  it('should return true for "A man, a plan, a canal: Panama"', () => {
    // arrange
    const s = "A man, a plan, a canal: Panama";
    const expected = true;

    // act
    const actual = isPalindrome(s);

    // assert
    expect(actual).toEqual(expected);
  });

  it('should return false for "race a car"', () => {
    // arrange
    const s = "race a car";
    const expected = false;

    // act
    const actual = isPalindrome(s);

    // assert
    expect(actual).toEqual(expected);
  });

  it('should return true for " "', () => {
    // arrange
    const s = " ";
    const expected = true;

    // act
    const actual = isPalindrome(s);

    // assert
    expect(actual).toEqual(expected);
  });

  it("should return false for '0P'", () => {
    // arrange
    const s = "0P";
    const expected = false;

    // act
    const actual = isPalindrome(s);

    // assert
    expect(actual).toEqual(expected);
  });
});
