class Human {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} speaks true always`;
  }
  look() {
    return `${this.name}`;
  }
}

class Man extends Human {
  constructor(name, brave) {
    super(name);
    this.brave = brave;
  }
  speak() {
    return `I am ${this.name}, a ${this.brave} mentality`;
  }
}

class Women extends Human {
  constructor(name, beautiful) {
    super(name);
    this.beautiful = beautiful;
  }
  look() {
    return `I am ${this.name}. A ${this.beautiful} girl`;
  }
}

const shah = new Man('Alam', 'true');
const tangia = new Women('Tangia', 'beautiful');
console.log(shah.speak());
console.log(tangia.look());

////////////////////////////////////////////////
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    return `${this.name}, the ${this.breed}, barks.`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name); // Call the constructor of the parent class
    this.color = color;
  }

  speak() {
    return `${this.name}, the ${this.color} cat, meows.`;
  }
}

const dog = new Dog('Rex', 'German Shepherd');
const cat = new Cat('Whiskers', 'white');

console.log(dog.speak()); // Output: Rex, the German Shepherd, barks.
console.log(cat.speak());
