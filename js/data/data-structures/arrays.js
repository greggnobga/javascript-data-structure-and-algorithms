/** Misc Problems.*/

export default class ArrayStructure {
  /** Constructor. */
  constructor() {}

  /** Array is iterable. */
  arrayBasic() {
    /** Define array. */
    const arr = [1, 2, 3, 'John', 'Doe', 'Not', false];

    /** Access array. */
    console.log(arr[0]);

    /** The push() method adds one or more elements to the end of an array and returns the new length of the array. */
    arr.push('Push at the end using push.');

    /** The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. */
    arr.unshift('Add at the beginning using unshift.');

    /** The pop() method removes the last element from an array and returns that element. */
    arr.pop();

    /** The shift() method removes the first element from the array and returns that element. This process also changes the pointers of the rest of the elements. */
    arr.shift();

    /** Loop the array using for of. */
    for (const item of arr) {
      console.log(item);
    }

    /** The slice() method allows you to create a new array by extracting a portion of an existing array. It takes two arguments: the starting index (inclusive) and the end index of the slice (exclusive). The original array remains unchanged.  */
    const arrSlice = [1, 2, 3, 4, 5];
    const sliced = arrSlice.slice(1, 4);
    console.log('Array slice: ', sliced);

    /** The Splice() method has a dual purpose: it can be used to remove elements from an array and insert new elements into an array. It takes three or more arguments: the starting index, the number of elements to remove, and additional elements to insert. */
    const arrSplice = [1, 2, 3, 4, 5];
    arrSplice.splice(2, 2);
    arrSplice.splice(1, 0, 6, 7);
    console.log('Array splice: ', arrSplice);

    /** The concat() method is used to merge two or more arrays. Returns a new array containing the combined elements of the original array. */
    const array1 = [1, 2];
    const array2 = [3, 4];
    const combinedArray = array1.concat(array2);
    console.log('Array concat: ', combinedArray);

    /** The IndexOf() method returns the first index of the given element that can be found in the array, or -1 if the element does not exist. The LastIndexOf() method works the same way, but starts searching at the end of the array. */
    const arrIndex = [1, 2, 3, 2, 4];
    const firstIndex = arrIndex.indexOf(2);
    const lastIndex = arrIndex.lastIndexOf(2);

    console.log('First index: ', firstIndex, 'Last index: ', lastIndex);

    /** The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array. */
    const arrMap = [1, 2, 3, 4];
    const doubled = arrMap.map((item) => item * 2);
    console.log('Array map: ', doubled);

    /** The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array.  */
    const arrFilter = [1, 2, 3, 4];
    const evens = arrFilter.filter((item) => item % 2 === 0);
    console.log('Array filter: ', evens);

    /** The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array. */
    const arrReduce = [1, 2, 3, 4];
    const sum = arrReduce.reduce(function (result, item) {
      return result + item;
    }, 0);
    console.log('Array reduce: ', sum);

    var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    var petCounts = pets.reduce(function (obj, pet) {
      if (!obj[pet]) {
        obj[pet] = 1;
      } else {
        obj[pet]++;
      }
      return obj;
    }, {});

    console.log(petCounts);

    /** Return something. */
    return 'Process completed.';
  }
}
