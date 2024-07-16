/** Hash table */
export default class HashTable {
  /** Constructor. */
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  /** Hash. */
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    /** Return something. */
    return total % this.size;
  }

  /** Set. */
  set(key, value) {
    /** Get index from hash method. */
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
    /** Return something. */
    return { key: index };
  }

  /** Get. */
  get(key) {
    /** Get index from hash method. */
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    /** Return something. */
    return undefined;
  }

  /** Remove. */
  remove(key) {
    /** Get index from hash method. */
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        bucket.splice(bucket.indexOf(sameKey), 1);
      }
    }
    /** Return something. */
    return true;
  }

  /** Display. */
  display() {
    let items = [];
    /** Traverse table . */
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] && this.table[i].length !== 0) {
        items = [...items, this.table[i]];
      }
    }
    /** Return something. */
    return items;
  }
}
