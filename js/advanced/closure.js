/** Closure - Closure is created when a function return a function, scope chain is what is called closure in javascipt. */
function closure() {
  let counter = 0;
  function count() {
    counter++;
    console.log(counter);
  }
  return count;
}

const fn = closure();
fn();
fn();
