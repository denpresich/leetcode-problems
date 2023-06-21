const { removeDuplicates } = require("./remove-duplicates");

describe("removeDuplicates", () => {
  it("should return 2 for an array [1,1,2]", () => {
    // arrange
    const array = [1, 1, 2];

    const expected_array = [1, 2];
    const expected_k = expected_array.length;

    // act
    const actual_k = removeDuplicates(array);

    // assert
    expect(actual_k).toEqual(expected_k);

    for (let i = 0; i < expected_k; i++) {
      expect(array[i]).toEqual(expected_array[i]);
    }
  });
  it("should return 5 for an array [0,0,1,1,1,2,2,3,3,4]", () => {
    // arrange
    const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    const expected_array = [0, 1, 2, 3, 4];
    const expected_k = expected_array.length;

    // act
    const actual_k = removeDuplicates(array);

    // assert
    expect(actual_k).toEqual(expected_k);

    for (let i = 0; i < expected_k; i++) {
      expect(array[i]).toEqual(expected_array[i]);
    }
  });
  it("should return 2 for an array [1,2]", () => {
    // arrange
    const array = [1, 2];

    const expected_array = [1, 2];
    const expected_k = expected_array.length;

    // act
    const actual_k = removeDuplicates(array);

    // assert
    expect(actual_k).toEqual(expected_k);

    for (let i = 0; i < expected_k; i++) {
      expect(array[i]).toEqual(expected_array[i]);
    }
  });
});
