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
}
