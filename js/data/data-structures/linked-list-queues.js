/** Import module. */
import LinkedListStructure from './linked-lists.js';

/** Queue Structure. LIFO */
export default class LinkedListQueue {
  constructor() {
    this.list = new LinkedListStructure();
  }
  /** Insert value at the rear end of the list. */
  enqueue(value) {
    return this.list.append(value);
  }

  /** Remove value at the start of the list. */
  dequeue() {
    return this.list.removeFromFront();
  }

  /** Get the first value in the list. */
  peek() {
    return this.list.head.value;
  }

  /** Check if list is empty. */
  isEmpty() {
    return this.list.isEmpty();
  }

  /** Get the size of the list. */
  getSize() {
    return this.list.getSize();
  }

  /** Print the list. */
  print() {
    return this.list.print();
  }
}
