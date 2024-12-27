// A class is a way to encapsulate data and methods. You create instances of what is, essentially, a blueprint of a thing.

function Animal(legs) {
  this.legs = legs || 0;
}

Animal.prototype.move = function () {
  if (this.legs > 0) {
    console.log("walk");
  } else {
    console.log("slither");
  }
};

function Dog(legs, sound) {
  Animal.call(this, legs);
  this.sound = sound || "ruff";
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sounds = function () {
  console.log(this.sound);
};

var myDog = new Dog(4);

console.log("before es6");
console.log(myDog.legs);
myDog.move();
myDog.sounds();

// using es6 feature
console.log("\n");
class car {
  constructor(color = "red") {
    this.color = color;
  }

  move() {
    if (this.color == "red") {
      console.log(`car is red`);
    } else console.log("car is not red");
  }
}

class Safari extends car {
  constructor(color = "black", sound = "good") {
    super(color);
    this.sound = sound;
  }
  sounds() {
    console.log(this.sound);
  }
}

let myCar = new Safari("red");
const cars = new car("blac");

console.log("\nAfter ES6");
console.log(myCar.color);

myCar.move();
myCar.sounds();

// call only class not subclass
cars.move();
