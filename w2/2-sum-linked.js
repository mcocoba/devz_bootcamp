class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(data) {
    if (this.head == null) {
      this.head = new Node(data);
    }

    //
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }

    current.next = new Node(data);
  }
}

function myLinkedList(list) {
  let linkedList = new LinkedList();

  for (let i = 0; i < list.length; i++) {
    // Add nodes to LinkedList
    linkedList.append(list[i]);
  }
  return linkedList;
}

let test1 = myLinkedList([1, 2, 3, 4]);
console.log('test1', test1);
