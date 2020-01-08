function greet(name) { //Interpolation
    return `Hello ${name}`; 
}

const add = (a,b) => a + b; //implicit return- you don't need to have return.
//If you have more that one parameter, you ave t have the () separated by commas
//one parameter then you can omit the ()

// Declaring a multi-line function (with explicit return, with only one parameter) with the ES6 Arrow Syntax;
const isPalindrome = str => {
  if (!str.length) return false;
  
  let leftSideIdx = 0;
  let rightSideIdx = str.length - 1;

  while (leftSideIdx < rightSideIdx) {
    let leftSideLetter = str[leftSideIdx];
    let rightSideLetter = str[rightSideIdx];

    if (leftSideLetter !== rightSideLetter) return false;

    leftSideIdx++;
    rightSideIdx--;
  }

  return true;
}

// Declaring a multi-line function (with explicit return, with more than one parameter) with the ES6 Arrow Syntax;
const doMath = (x, y, z) => {
    let sum = x + y + z;
    let product = x * y * z;

    return product / sum;
}

class Animal { 
    constructor(name) { //instantiates an object of the Animal class
	this.name = name;
	this.cat = "cat";
    }
    
    speak() {
	console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal { //extends indicates that we want to be a subclass of Animal and inherit it
    //extends also implies that you will be calling the parent constructor
    constructor(name) {
	super(name); //invokes the Parent class constructor function
	//when you want to use this or bind methods, then you must have "super" first
    }
}

let d = new Dog('Mitzie');
d.speak(); //Mitzie makes a noise
d.cat; //"cat" 


Array.prototype.hello = function () {
    console.log(this);
}

Array.prototype.hello = () => { //this is binded to the Window and it will not return the array
    console.log(this;)
}.bind(this)

let arr = [1,2,3,4];
arr.hello;
