/** Stop only when encounter return or execution completed. */
function normalFunction() {
  console.log('Hello world');
}

normalFunction();

/** Generator function can pause the execution. */
function* generatorFunction() {
  yield 'Hello', yield 'World';
}

/** Simpler to create iterator. */
const generatorObj = generatorFunction();
for (const word of generatorObj) {
  console.log(word);
}
