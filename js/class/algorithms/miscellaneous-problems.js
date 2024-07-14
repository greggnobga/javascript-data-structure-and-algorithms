/** Misc Problems.*/

export default class MiscellaneousProblems {
  /** Constructor. */
  constructor() {}

  /** Cartesan Product. Big-O notations: O(mn) */
  cartesanProduct(arr1, arr2) {
    /** Declare a variable respository. */
    const result = [];
    /** Do the magic in combining the two arrays. */
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        result.push([arr1[i], arr2[j]]);
      }
    }

    /** Return something. */
    return result;
  }

  /** Climbing Staircase. Big-O notations: O(n) */
  climbingStaircase(n) {
    const numOfWays = [1, 2];
    for (let i = 2; i <= n; i++) {
      numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
    }

    /** Return something. */
    return numOfWays[n - 1];
  }

  /** Tower of Hanoi. Big-O notations: O(2^n) */
  towerOfHanoi(n, fromRod, toRod, usingRod) {
    /** Test if N is equal to 1. */
    if (n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
      return;
    }
    /** Move disk. */
    this.towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    this.towerOfHanoi(n - 1, usingRod, toRod, fromRod);

    /** Return nothing. */
    return 'Process completed.';
  }
}
