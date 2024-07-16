/** Node. */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
/** Link List Double Structure. LIFO */
class DoublyLinkedList {
  /** Constructor. */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** Prepend - at the start of the list. */
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  /** Append - at the end of the list. */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  /** Remove from front. */
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  /** Remove from end. */
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  /** Check if is empty. */
  isEmpty() {
    return this.size === 0;
  }

  /** Get size. */
  getSize() {
    return this.size;
  }

  /** Print. */
  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let list = '';
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }

  /** Print reverse. */
  printReverse() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.tail;
      let list = '';
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.prev;
      }
      console.log(list);
    }
  }
}
