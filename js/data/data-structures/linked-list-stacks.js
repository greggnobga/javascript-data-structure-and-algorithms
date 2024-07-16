/** Import module. */
import LinkedListStructure from './linked-lists.js';

/** Stack Structure. FIFO*/
export default class LinkedListStack {
  constructor() {
    this.list = new LinkedListStructure();
  }

  /** Insert value at the start of the list. */
  push(value) {
    return this.list.prepend(value);
  }

  /** Remove value from the top of the list. */
  pop() {
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
