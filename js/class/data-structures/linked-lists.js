/** Circular Queue Structure. LIFO */
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkListStructure {
  /** Constructor. */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** Check if is empty. */
  isEmpty() {
    return this.size === 0 ? true : false;
  }

  /** Get size. */
  getSize() {
    return this.size;
  }

  /** Append - at the end of the list. */
  prepend(value) {
    const node = new Node(value);
    /** Check if empty. */
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    /** Increment size. */
    this.size++;

    /** Return something. */
    return value;
  }

  /** Append - at the end of the list. */
  append(value) {
    const node = new Node(value);
    /** Check if empty. */
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    /** Increment size. */
    this.size++;

    /** Return something. */
    return value;
  }

  /** Remove from front. */
  removeFromFront(index) {
    /** Check if empty. */
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    /** Return something. */
    return value;
  }

  /** Remove from tail. */
  removeFromEnd(index) {
    /** Check if empty. */
    if (this.isEmpty()) {
      return null;
    }

    /** Declare pointer. */
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }

    /** Decrement the size. */
    this.size--;

    /** Return something. */
    return value;
  }

  /** Insert. */
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
    /** Return something. */
    return value;
  }

  /** Search. */
  search(value) {
    /** Check if empty. */
    if (this.isEmpty()) {
      return -1;
    }
    /** Declare pointer. */
    let i = 0;
    let curr = this.head;
    /** Travese node. */
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }

    /** Return something. */
    return -1;
  }

  /** Reverse. */
  reverse() {
    /** Declare pointer. */
    let prev = null;
    let curr = this.head;
    /** Travese node. */
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;

    /** Return something. */
    return true;
  }

  /** Print. */
  print() {
    /** Check if empty. */
    if (this.isEmpty()) {
      return 0;
    } else {
      /** Declare pointer. */
      let curr = this.head;
      let list = '';
      /** Travese node. */
      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      /** Return something. */
      return list;
    }
  }
}
