import LinkedListStructure from './linked-lists.js';

export default class LinkedListQueue {
  constructor() {
    this.list = new LinkedListStructure();
  }

  push(value) {
    return this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}
