const { lengthOfLongestSubstring } = require("./longest-substring");

describe("3. Longest Substring Without Repeating Characters", () => {
  test("should return 3 (abc) for 'abcabcbb'", () => {
    // arrange
    const s = "abcabcbb";
    const expectedResult = 3; // abc

    // act
    const actualResult = lengthOfLongestSubstring(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return 1 (b) for 'bbbbb'", () => {
    // arrange
    const s = "bbbbb";
    const expectedResult = 1; // b

    // act
    const actualResult = lengthOfLongestSubstring(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return 3 (wke) for 'pwwkew'", () => {
    // arrange
    const s = "pwwkew";
    const expectedResult = 3; // wke

    // act
    const actualResult = lengthOfLongestSubstring(s);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
