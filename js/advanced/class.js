class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  sayName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
  }

  figthing() {
    return `Ready to fight anytime, anywhere...`;
  }
}

const person = new Person('Bruce', 'Wyne');

const batman = new SuperHero('Bruce', 'Wyne');

console.log(batman.sayName());
