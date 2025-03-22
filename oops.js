// OOPS in JavaScript - Explained with Every Detail

// 1. CLASS (A class is like a blueprint for creating objects)
// Think of a class as a recipe that tells us how to create something.
class Animal {
  // 2. CONSTRUCTOR (A special function that runs when a new object is created)
  constructor(name, sound) {
    this.name = name; // 'this' refers to the specific object created from this class
    this.sound = sound;
  }

  // 3. METHOD (A function inside a class that performs actions)
  makeSound() {
    console.log(`${this.name} makes a '${this.sound}' sound!`);
  }
}

// 4. OBJECT CREATION (Making an instance of a class)
const dog = new Animal("Dog", "Bark");
dog.makeSound(); // Output: Dog makes a 'Bark' sound!

// 5. INHERITANCE (A child class can inherit properties & methods from a parent class)
// This avoids code duplication and allows reusability
class Bird extends Animal {
  constructor(name, sound, canFly) {
    super(name, sound); // Calls the parent class constructor to set name & sound
    this.canFly = canFly; // New property specific to birds
  }

  // 6. METHOD OVERRIDING (Child class can change the behavior of a parent class method)
  makeSound() {
    console.log(`${this.name} chirps '${this.sound}' and can fly: ${this.canFly}`);
  }
}

// Creating an instance of Bird
const parrot = new Bird("Parrot", "Chirp", true);
parrot.makeSound(); // Output: Parrot chirps 'Chirp' and can fly: true

// 7. ENCAPSULATION (Keeping data private and controlling access to it)
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    let _balance = balance; // Private variable (JavaScript doesn’t have true private properties, but we use _ as a convention)

    // Getter method to access private variable
    this.getBalance = function () {
      return _balance;
    };

    // Setter method to modify the private variable safely
    this.deposit = function (amount) {
      if (amount > 0) _balance += amount;
    };
  }
}

const myAccount = new BankAccount("Alice", 1000);
console.log(myAccount.getBalance()); // Output: 1000
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500

// 8. POLYMORPHISM (Different classes can have the same method, but with different behaviors)
class Shape {
  area() {
    return "Area formula depends on shape!";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius; // Formula for circle area
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height; // Formula for rectangle area
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // Output: 78.539...
const myRectangle = new Rectangle(4, 6);
console.log(myRectangle.area()); // Output: 24

// 9. STATIC METHODS (Methods that belong to a class but not to any instance)
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtils.add(5, 10)); // Output: 15 (no need to create an object)

// 10. GETTERS AND SETTERS (Accessing and modifying private variables safely)
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name can't be empty!");
    }
  }
}

const person = new Person("John", 30);
console.log(person.name); // Output: John
person.name = "Mike";
console.log(person.name); // Output: Mike
person.name = ""; // Output: Name can't be empty!

// 11. ABSTRACTION (Hiding complex logic inside a class and exposing only what's necessary)
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  startEngine() {
    console.log("Starting the engine...");
    this.#privateMethod();
  }

  // Private method using # (only accessible within the class)
  #privateMethod() {
    console.log("Engine started. Ready to drive!");
  }
}

const myCar = new Car("Tesla");
myCar.startEngine(); // Output: Starting the engine... Engine started. Ready to drive!
// myCar.#privateMethod(); // This will throw an error because it's private

// 12. PROTOTYPES (Every JavaScript object has a prototype that it inherits properties from)
function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.describe = function () {
  console.log(`This is a ${this.type}`);
};

const bike = new Vehicle("Motorbike");
bike.describe(); // Output: This is a Motorbike

// 13. MIXINS (A way to share functionality between classes without inheritance)
let flyMixin = {
  fly() {
    console.log("I can fly!");
  },
};

Object.assign(Bird.prototype, flyMixin);
parrot.fly(); // Output: I can fly!

// 14. INSTANCEOF (Checking if an object is an instance of a class)
console.log(dog instanceof Animal); // Output: true
console.log(myCar instanceof Bird); // Output: false

// 15. DESTRUCTURING OBJECTS (Extracting properties from objects easily)
const { name, sound } = dog;
console.log(name, sound); // Output: Dog Bark

// 16. SPREAD OPERATOR (Copying or merging objects easily)
const cat = { ...dog, name: "Cat", sound: "Meow" };
console.log(cat); // Output: { name: "Cat", sound: "Meow" }

// 17. CLASS EXPRESSION (Another way to define classes)
const Fish = class {
  constructor(name) {
    this.name = name;
  }
};
const goldfish = new Fish("Goldfish");
console.log(goldfish.name); // Output: Goldfish

// 18. SINGLETON PATTERN (Ensuring only one instance of a class exists)
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true

// Conclusion: This code deeply covers all OOP concepts with additional details!
