/** Sort Algorithms. */
export default class SortAlgorithms {
  /** Constructor. */
  constructor() {}

  /** Bubble sort. Big-O notations: O(n^2) */
  bubbleSort(arr, desc = false) {
    /** Pointer to determine if array element has been swapped. */
    let swapped;

    /** Do the bubble swap. */
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        /** Test the condition. */
        if (desc ? arr[i] < arr[i + 1] : arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    /** Return something. */
    return arr;
  }

  /** Insertion sort. Big-O notations: O(n^2) */
  insertionSort(arr, desc = false) {
    /** Do insertion sort. */
    for (let i = 1; i < arr.length; i++) {
      let nti = arr[i];
      let se = i - 1;
      /** Test the condition. */
      while (se >= 0 && desc ? arr[se] < nti : arr[se] > nti) {
        arr[se + 1] = arr[se];
        se = se - 1;
      }
      arr[se + 1] = nti;
    }
    /** Return something. */
    return arr;
  }

  /** Quick sort. Big-O notations: O(nlogn) */
  quickSort(arr, desc = false) {
    if (arr.length < 2) {
      return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (desc ? arr[i] > pivot : arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    /** Return something. */
    return [...this.quickSort(left), pivot, ...this.quickSort(right)];
  }

  /** Quick sort. Big-O notations: O(nlogn) */
  mergeSort(arr, desc = false) {
    /** Return if array is single element. */
    if (arr.length <= 1) {
      return arr;
    }
    /** Create sub arrays. */
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    /** Return something. */
    return this.merge(this.mergeSort(left), this.mergeSort(right), desc);
  }

  /** Merge left and right array. */
  merge(left, right, desc) {
    /** Declare pointer. */
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    /** Do merge sort. */
    while (leftIndex < left.length && rightIndex < right.length) {
      if (desc ? left[leftIndex] > right[rightIndex] : left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    /** Return something. */
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}
