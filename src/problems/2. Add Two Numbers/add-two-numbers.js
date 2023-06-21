function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let head = new ListNode(0);
  let tail = head;

  while (!!l1 || !!l2) {
    const l1Value = l1?.val || 0;
    const l2Value = l2?.val || 0;

    const value = tail.val + l1Value + l2Value;
    const greatedOrEqualTo10 = value >= 10;

    const nodeValue = greatedOrEqualTo10 ? value - 10 : value;

    tail.val = nodeValue;

    if (!!l1?.next || !!l2?.next) {
      tail.next = new ListNode(greatedOrEqualTo10 ? 1 : 0);
      tail = tail.next;
    } else if (greatedOrEqualTo10) {
      tail.next = new ListNode(1);
      tail = tail.next;
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return head;
}

module.exports = { addTwoNumbers };
