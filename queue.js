class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    let newQueue = new Node(val);
    if (!this.head && !this.tail) {
      this.head = newQueue;
      this.tail = newQueue;
    }
    this.tail.next = newQueue;
    this.tail = newQueue;
  }
  dequeue() {
    if (!this.head && !this.tail) {
      let err = new Error("Sorry, cannot dequeue from an empty queue");
      throw err;
    }
    let nextQueue = this.head.next;
    this.head = nextQueue;
    return nextQueue;
  }
  peek() {
    if (!this.head && !this.tail) {
      return "The Queue is empty";
    }
    return this.head.val;
  }
}
