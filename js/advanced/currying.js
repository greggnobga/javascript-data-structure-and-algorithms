/** Function currying, transform function with multiple arguments in a sequence of nesting functions. e.g function(a, b, c) into function(a)(b)(c) */
function sum(a, b, c) {
  return a + b + c;
}
console.log('Regular function: ', sum(1, 2, 3));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curried = curry(sum);
console.log('Function currying: ', curried(1)(2)(3));
