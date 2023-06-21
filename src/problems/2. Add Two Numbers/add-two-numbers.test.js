const { addTwoNumbers } = require("./add-two-numbers");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function listFromArray(values) {
  let head = null;
  let tail = null;

  values.forEach((value) => {
    if (!head) {
      head = new ListNode(value);
      tail = head;
    } else {
      tail.next = new ListNode(value);
      tail = tail.next;
    }
  });

  return head;
}

describe("2. Add Two Numbers", () => {
  test("should return [7,0,8] if l1 = [2,4,3], l2 = [5,6,4]", () => {
    // arrange
    const l1 = listFromArray([2, 4, 3]);
    const l2 = listFromArray([5, 6, 4]);
    const expectedResult = listFromArray([7, 0, 8]);

    // act
    const actualResult = addTwoNumbers(l1, l2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return [0] if l1 = [0], l2 = [0]", () => {
    // arrange
    const l1 = listFromArray([0]);
    const l2 = listFromArray([0]);
    const expectedResult = listFromArray([0]);

    // act
    const actualResult = addTwoNumbers(l1, l2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });

  test("should return [8,9,9,9,0,0,0,1] if l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", () => {
    // arrange
    const l1 = listFromArray([9, 9, 9, 9, 9, 9, 9]);
    const l2 = listFromArray([9, 9, 9, 9]);
    const expectedResult = listFromArray([8, 9, 9, 9, 0, 0, 0, 1]);

    // act
    const actualResult = addTwoNumbers(l1, l2);

    // assert
    expect(actualResult).toEqual(expectedResult);
  });
});
