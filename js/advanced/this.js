/** this - implicit binding. */
const person = {
  name: 'John Doe',
  sayName: function () {
    console.log(`My name ${this.name}`);
  },
};
person.sayName();

/** this - explicit binding. */
function sayName() {
  console.log(`My name ${this.name}`);
}
sayName.call(person);

/** this - new binding. */
function Person(name) {
  this.name = name;
}

const p1 = new Person('Bruce');
const p2 = new Person('Peter');

console.log(p1.name, p2.name);

/** this - default binding will rely on global scope. */
sayName();
