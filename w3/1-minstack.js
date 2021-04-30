class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MinStack {
  constructor() {
    this.top = new Node();
    this.min = undefined;
  }

  push(item) {
    let node = new Node(item);
    node.next = this.top;
    this.top = node;

    if (item <= node.value) {
      this.min = item;
    }
  }

  pop() {
    let data = this.top.value;
    this.top = this.top.next;

    if (this.min === data) {
      this.min = this.top.next.value;
    }

    return data;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.top == null;
  }

  getMin() {
    return this.min;
  }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('-3', minStack.getMin());
minStack.pop();
console.log('0', minStack.peek());
console.log('-2', minStack.getMin());
