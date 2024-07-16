/** Queue Structure. LIFO */
export default class QueueStructure {
  /** Constructor. */
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  /** Add item in the array at the end. */
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  /** Remove item in the array at the beginning. */
  dequeue(element) {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  /** Check if queue is empty. */
  isEmpty() {
    return this.rear - this.front === 0;
  }

  /** Check if array has at least one element. */
  peek() {
    return this.items[this.front];
  }

  /** Get the size of the array. */
  size() {
    return this.rear - this.front;
  }

  /** View the items in the array. */
  print() {
    return this.items;
  }
}
