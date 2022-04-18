// Primitives/ Value type
//Variables
let name = "Mosh"; //String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let firstName = undefined;
let selectedColor = null; //clear de value

console.log(typeof name);
console.log(typeof selectedColor);

//typeof tell you what type of variable is

typeof name; // String
typeof selectedColor; //Object

//Objects

// {} Are call Object literal
let person = {
  name: "Noel",
  age: 30,
};

//Dot Notation to channge the value
person.name = "John";

console.log(person.name);
//Bracket Notation to change the value

person["name"] = "Mary";

console.log(person.name);

//ARRAY
//Array is a data structur that represent a list of items

let selectedColor1 = ["red", "blue"];
selectedColor1[2] = "green"; //add another value to the array
console.log(selectedColor1.length);

//acces the elements in the array

let selectedColor2 = ["red", "blue"];
console.log(selectedColor2[0]);

//Functions

//Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Noel", "Rodriguez");
greet("Kevin", "Rolon");

//Function calculating a value

function matematicas(number) {
  return number * number;
}
console.log(matematicas(2));
