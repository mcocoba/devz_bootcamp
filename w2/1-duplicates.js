class MAnode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MAlist {
  constructor(head = null) {
    this.head = head;
  }

  add(item) {
    let newNode = new MAnode(item);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let n = this.head;

      while (n.next != null) {
        n = n.next;
      }
      n.next = newNode;

      return this.head;
    }
  }
}

function linkedList(nodes) {
  // Build LinkedList
  let linkedList = new MAlist();
  for (let i = 0; i < nodes.length; i++) {
    // Add nodes to LinkedList
    linkedList.add(nodes[i]);
  }
  return linkedList;
}

function removeDuplicates(list) {
  // Validate input
  if (list.length == 0) return list;

  let head = list.head;
  let directory = new Set();

  while (head) {
    if (!directory.has(head.value)) {
      directory.add(head.value);
    }

    head = head.next;
  }

  return directory;
}

// Complexity = O(n2)

const test1 = linkedList([]);
const test2 = linkedList([4, 5, 9, 0, 5, 1, 2]);
const test3 = linkedList([1, 2, 3, 3, 2, 1]);

console.log(removeDuplicates(test1), '[]');
console.log(removeDuplicates(test2), '[4,5,9,0,1,2]');
console.log(removeDuplicates(test3), '[1,2,3]');
