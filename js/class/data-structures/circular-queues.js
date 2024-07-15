/** Circular Queue Structure. LIFO */

export default class CircularQueueStructure {
  /** Constructor. */
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  /** Check if queue is full. */
  isFull() {
    return this.currentLength === this.capacity;
  }

  /** Check if queue is empty. */
  isEmpty() {
    return this.currentLength === 0;
  }

  /** Add item in the array. */
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
    return element;
  }

  /** Remove item in the array. */
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  /** Get one element from queue. */
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  /** View the items in queue. */
  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty;');
    } else {
      let i;
      let str = '';
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' ';
      }
      str += this.items[i];
      return str;
    }
  }
}
