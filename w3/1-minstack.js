class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class stack {
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
    if (this.top === null) {
      return null;
    }

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

class MinStack {
  constructor() {
    this.currentStack = new stack();
    this.minStack = new stack();
  }

  push(item) {
    if (this.minStack.peek() == undefined) {
      this.minStack.push(item);
    }

    if (item <= this.minStack.peek()) {
      this.minStack.push(item);
    }
    this.currentStack.push(item);
  }

  pop() {
    if (this.currentStack.pop() === this.minStack.peek()) {
      this.minStack.pop();
    }
  }

  peek() {
    return this.currentStack.peek();
  }

  getMin() {
    return this.minStack.peek();
  }
}

console.log('------- CASE 1 -------');
let minStackBasic = new MinStack();
minStackBasic.push(-2);
minStackBasic.push(0);
minStackBasic.push(-3);
console.log('-3', minStackBasic.getMin());
minStackBasic.pop();
console.log('0', minStackBasic.peek());
console.log('-2', minStackBasic.getMin());

console.log('------- CASE 2 -------');
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-6);
minStack.push(-3);
minStack.push(-2);
console.log('-6', minStack.getMin());
minStack.pop();
console.log('-3', minStack.peek());
console.log('-6', minStack.getMin());
