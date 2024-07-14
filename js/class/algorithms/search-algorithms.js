/** Search Algoritms. */
export default class SearchAlgorithms {
  /** Constructor. */
  constructor() {}

  /** Linear search. O(n^2) */
  linearSearch(arr, target) {
    /** Loop the array and match the target. */
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    /** Return something. */
    return -1;
  }

  /** Binary search. O(logn) */
  binarySearch(arr, target) {
    /** Sort array. */
    let sort = arr.sort((a, b) => a - b);

    /** Assign the pointer. */
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
      /** Get the middle index and use ternary to mixed and match. */
      let modulus = leftIndex + (rightIndex - leftIndex / 2);
      let middleIndex = modulus % 2 === 0 ? Math.ceil(modulus) : Math.floor(modulus);

      /** Return if target and middleIndex are the same value. */
      if (target === sort[middleIndex]) {
        return { index: middleIndex, target: target };
      }

      /** Cut half of the array. */
      if (target < sort[middleIndex]) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    }
    /** Return something. */
    return { index: -1, target: target };
  }

  /** Recursive binary search. O(logn) */
  recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      return this.recursiveBinarySearch(arr, target, left, mid - 1);
    } else {
      return this.recursiveBinarySearch(arr, target, mid + 1, right);
    }
  }
}
