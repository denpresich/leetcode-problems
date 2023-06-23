const { firstUniqChar } = require("./first-unique");

describe("first-unique", () => {
  it("should return 0 for leetcode", () => {
    // arrange
    const s = "leetcode";
    const expected = 0;

    // act
    const actual = firstUniqChar(s);

    // assert
    expect(actual).toEqual(expected);
  });

  it("should return 2 for loveleetcode", () => {
    // arrange
    const s = "loveleetcode";
    const expected = 2;

    // act
    const actual = firstUniqChar(s);

    // assert
    expect(actual).toEqual(expected);
  });

  it("should return -1 for aabb", () => {
    // arrange
    const s = "aabb";
    const expected = -1;

    // act
    const actual = firstUniqChar(s);

    // assert
    expect(actual).toEqual(expected);
  });
});
