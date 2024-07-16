/** Object Structure.*/

export default class ObjectStructure {
  /** Constructor. */
  constructor() {}

  /** Object is not iterable. */
  objectBasic() {
    /** Create an object. */
    const obj = {
      firstname: 'John',
      lastname: 'Doe',
      'birth-year': 1988,
      sayName: function () {
        console.log(this.firstname + ' ' + this.lastname);
      },
    };

    /** Access object either dot notation or bracket - use bracket when keys has space or hyphen. */
    console.log(obj.firstname);
    console.log(obj['birth-year']);

    /** Add item in the object. */
    obj.hobbies = 'Coding';
    obj['birth-month'] = 'November';

    /** Delete item in the object. */
    delete obj['birth-month'];

    obj.sayName();

    console.log('Object Basic', obj);

    /** Object.values() iterates over an object’s own enumerable properties, returning an array containing the keys of those properties. */
    const values = Object.values(obj);
    console.log('Object values', values);

    /** Object.keys() iterates over an object’s own enumerable properties, returning an array containing the keys of those properties. */
    const keys = Object.keys(obj);
    console.log('Object keys', keys);

    /** Object.entries() iterates over an object’s own enumerable string-keyed property [key, value] pairs, returning an array of arrays. */
    const entries = Object.entries(obj);
    console.log('Object entries', entries);

    /** Return something. */
    return 'Process completed.';
  }
}
