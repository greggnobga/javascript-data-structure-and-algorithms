/** Prototype. */
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

/** Function  instantiate with new is called constructor function. */
const person = new Person('Jone', 'Doe');
const person2 = new Person('Jane', 'Doe');

Person.prototype.fullName = function () {
  return `My name is ${this.firstName} ${this.lastName}`;
};

function SuperHero(fName, lName) {
  /** Connect variable by using call. */
  Person.call(this, fName, lName);
  this.isHero = true;
}

SuperHero.prototype.fight = function () {
  return `Ready to fight anytime, anywhere...`;
};

/** Connect prototype. */
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

const batman = new SuperHero('Bruce', 'Wayne');
console.log(batman.fullName());
