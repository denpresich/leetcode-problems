const { twoSum, twoSumV2 } = require("./two-sum");

describe("1. Two Sum", () => {
  describe("twoSum", () => {
    it("should return [0, 9] for nums = [2, 7, 11, 15] and target = 9", () => {
      // arrange
      const nums = [2, 7, 11, 15];
      const target = 9;

      const expectedResult = [0, 1];

      // act
      const actualResult = twoSum(nums, target);

      // assert
      expect(actualResult).toEqual(expectedResult);
    });

    it("should return [1,2] for nums = [3,2,4] and target = 6", () => {
      // arrange
      const nums = [3, 2, 4];
      const target = 6;

      const expectedResult = [1, 2];

      // act
      const actualResult = twoSum(nums, target);

      // assert
      expect(actualResult).toEqual(expectedResult);
    });

    it("should return [0, 1] for nums = [3, 3] and target = 6", () => {
      // arrange
      const nums = [3, 3];
      const target = 6;

      const expectedResult = [0, 1];

      // act
      const actualResult = twoSum(nums, target);

      // assert
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe("twoSumV2", () => {
    it("should return [0, 9] for nums = [2, 7, 11, 15] and target = 9", () => {
      // arrange
      const nums = [2, 7, 11, 15];
      const target = 9;

      const expectedResult = [0, 1];

      // act
      const actualResult = twoSumV2(nums, target);

      // assert
      expect(actualResult).toEqual(expectedResult);
    });

    it("should return [1,2] for nums = [3,2,4] and target = 6", () => {
      // arrange
      const nums = [3, 2, 4];
      const target = 6;

      const expectedResult = [1, 2];

      // act
      const actualResult = twoSumV2(nums, target);

      // assert
      expect(actualResult).toEqual(expectedResult);
    });

    it("should return [0, 1] for nums = [3, 3] and target = 6", () => {
      // arrange
      const nums = [3, 3];
      const target = 6;

      const expectedResult = [0, 1];

      // act
      const actualResult = twoSumV2(nums, target);

      // assert
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
