// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const { reverseString } = require("./reverse-string");

describe("collections", () => {
  describe("top-interview-questions", () => {
    describe("easy-collection", () => {
      describe("strings", () => {
        it('should return ["o","l","l","e","h"] for s = ["h","e","l","l","o"]', () => {
          // arrange
          const s = ["h", "e", "l", "l", "o"];
          const expected = ["o", "l", "l", "e", "h"];

          // act
          reverseString(s);

          // assert
          expect(s).toEqual(expected);
        });
        it('should return ["h","a","n","n","a","H"] for s = ["H","a","n","n","a","h"]', () => {
          // arrange
          const s = ["H", "a", "n", "n", "a", "h"];
          const expected = ["h", "a", "n", "n", "a", "H"];

          // act
          reverseString(s);

          // assert
          expect(s).toEqual(expected);
        });
      });
    });
  });
});
