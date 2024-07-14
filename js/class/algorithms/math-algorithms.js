/** Math Algorithms.
 * Big-O Notations - Worst Case compexity.
 * Omega Notations - Best Case compexity.
 * Theta Notations - Average Case compexity.
 * Worst case possible scenario. Express on algebraic terms, count how many the code runs plus the input size.
 * 1 loop = O(n) - Linear
 * 2 nested loop = O(n^2) - Quadratic
 * 3 input reduce by half = O(logn) - Logarithm
 */

export default class MathAlgorithms {
  /** Constructor. */
  constructor() {}

  /** Fibonnaci sequence.  Big-O notations: O(n) */
  fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  /** Factorial. Big-O notations: O(n) */
  factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
  }

  /** Prime numbers.  Big-O notations: O(n) */
  isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  /** Power of two. Big-O notations: O(sqrt(n) */
  isPowerOfTwo(n) {
    if (n < 1) return false;
    while (n > 1) {
      if (n % 2 !== 0) return false;
      n = n / 2;
    }
    return true;
  }

  /** Power of two bitwise.  Big-O notations: O(n) */
  isPowerOfTwoBitwise(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
  }

  /** Recurive fibonnacci. O(n^2) */
  recursiveFibonacci(n) {
    if (n < 2) return n;
    return this.recursiveFibonacci(n - 1) + this.recursiveFibonacci(n - 2);
  }
  /** Recurive factorial. Big-O notations: O(n)*/
  recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * this.recursiveFactorial(n - 1);
  }
}
