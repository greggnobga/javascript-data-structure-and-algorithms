/** Map Structure.*/

export default class MapStructure {
  /** Constructor. */
  constructor() {}

  /** Map is iterable. */
  mapBasic() {
    /** Create map. Accept one array, with small array with length 2 as key value pairs. */
    const map = new Map([
      ['a', 1],
      ['b', 2],
    ]);

    /** Add value in map. */
    map.set('c', 3);

    /** Delete value in map. */
    map.delete('c');

    /** Size of map. */
    console.log('Map size: ', map.size);

    /** Check if key value pairs exist in the map. */
    console.log(map.has('a'));

    /** For of loop. */
    for (const [key, value] of map) {
      console.log(`${key}: ${value}`);
    }

    /** Clear map. */
    map.clear();

    /** Return something. */
    return 'Process completed.';
  }
}
