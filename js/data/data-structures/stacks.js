/** Stack Structure. FIFO*/
export default class StackStructure {
  /** Constructor. */
  constructor() {
    this.items = [];
    this.count = 0;
  }

  /** Add element into top of stack. */
  push(element) {
    /** Push element and increment counter by one. */
    this.items[this.count] = element;
    this.count++;

    /** Return something. */
    return this.count - 1;
  }

  /** Remove top element in stack and return undefined if stack is empty. */
  pop() {
    /** Return undefind if stack is empty. */
    if (this.count === 0) return undefined;

    /** Perform deletion and decrease the counter. */
    let toDelete = this.items[this.count - 1];
    this.count--;

    /** Return something. */
    return toDelete;
  }

  /** Check element in stack. */
  peek() {
    /** Return something. */
    return this.items[this.count - 1];
  }

  /** Check if stack is empty. */
  isEmpty() {
    /** Return something. */
    return this.count == 0;
  }

  /** Check size of stack. */
  size() {
    /** Return something. */
    return this.count;
  }

  /** Print items in stack. */
  print() {
    /** Declare pointer. */
    let str = '';

    /** Loop through stack. */
    for (const item of this.items) {
      str += item + ' ';
    }

    /** Return something. */
    return str;
  }

  /** Clear stack. */
  clear() {
    this.items = [];
    this.count = 0;

    /** Return something. */
    return true;
  }
}
