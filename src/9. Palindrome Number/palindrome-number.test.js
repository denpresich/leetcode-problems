const { isPalindrome } = require("./palindrome-number");

describe("9. Palindrome Number", () => {
  it("should return true if x = '121'", () => {
    // arrange
    const x = 121;
    const expectedResult = true;

    // act
    const actualResult = isPalindrome(x);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return false if x = '-121'", () => {
    // arrange
    const x = -121;
    const expectedResult = false;

    // act
    const actualResult = isPalindrome(x);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return false if x = '10'", () => {
    // arrange
    const x = "10";
    const expectedResult = false;

    // act
    const actualResult = isPalindrome(x);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
