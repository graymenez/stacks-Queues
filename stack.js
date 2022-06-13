class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newStack = new Node(val);
    if (!this.head && !this.tail) {
      this.head = newStack;
      this.tail = newStack;
    }
    let currentStack = this.head;

    this.head = newStack;
    this.head.next = currentStack;
    this.tail.next = null;
    return this.head;
  }
  pop() {
    let currentStack = this.head;
    if (currentStack) {
      let nextStack = currentStack.next;
      this.head = nextStack;
    }
    if (!currentStack) {
      this.tail = null;
    }
    if (!this.head && !this.tail) {
      throw new Error('Cannot use callback ".pop()" on an empty stack.');
    }
  }
  peek() {
    let currentStack = this.head;
    if (currentStack) {
      return currentStack;
    }
    throw new Error('Cannot use callback ".peek()" on an empty stack.');
  }
  check() {
    if (!this.head && !this.tail) {
      return "This stack is empty";
    }
    return "There are items in this stack";
  }
}
