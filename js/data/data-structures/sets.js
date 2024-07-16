/** Set Structure.*/

export default class SetStructure {
  /** Constructor. */
  constructor() {}

  /** Set is iterable. */
  setBasic() {
    /** Create a set. */
    const set = new Set([1, 2, 3]);

    /** Add value in set and set ignore duplicate value. */
    set.add(4);
    set.add({ name: 'John', surname: 'Doe' });

    /** Delete value in set. */
    set.delete(4);
    set.forEach((item) => {
      if (item.name === 'John') set.delete(item);
    });

    /** See the size of the set. */
    console.log('Set size ', set.size);

    /** Check if value exist in the set. */
    console.log('Set value', set.has(4));

    /** For of loop. */
    for (const item of set) {
      console.log(item);
    }

    /** Clear set. */
    set.clear();

    /** Return something. */
    return 'Process completed.';
  }
}
