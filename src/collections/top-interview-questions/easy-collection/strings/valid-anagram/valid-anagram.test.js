const { isAnagram } = require("./valid-anagram");

describe("validAnagram", () => {
  it('should return true for "anagram" and "nagaram"', () => {
    // arrange
    const s = "anagram";
    const t = "nagaram";
    const expected = true;

    // act
    const actual = isAnagram(s, t);

    // assert
    expect(actual).toEqual(expected);
  });

  it('should return false for "rat" and "car"', () => {
    // arrange
    const s = "rat";
    const t = "car";
    const expected = false;

    // act
    const actual = isAnagram(s, t);

    // assert
    expect(actual).toEqual(expected);
  });

  it('should return false for "a" and "ab"', () => {
    // arrange
    const s = "a";
    const t = "ab";
    const expected = false;

    // act
    const actual = isAnagram(s, t);

    // assert
    expect(actual).toEqual(expected);
  });

  it('should return false for "ab" and "a"', () => {
    // arrange
    const s = "ab";
    const t = "a";
    const expected = false;

    // act
    const actual = isAnagram(s, t);

    // assert
    expect(actual).toEqual(expected);
  });

  it('should return true for "a" and "a"', () => {
    // arrange
    const s = "a";
    const t = "a";
    const expected = true;

    // act
    const actual = isAnagram(s, t);

    // assert
    expect(actual).toEqual(expected);
  });
});
