//     VALUE TYPES
let name = "Bob"; // string
let age = 30; // number literal
let  isApproved = false; //Boolean lirteral
let firstName = undefined;
let selectColour = null; // object
//   PERSON OBJRECT
let person = {
name: 'Bob',
age: 67
};
// Dot notation
person.name = "Job";

// Bracket notation
person['name'] = "Map"
// console.log(person.name)

//  ARRAYS
let selectedColours = ['red','yellow'];
selectedColours[2] = 4
console.log(selectedColours);

// FUNCTIONS
function greet(name, age) {
    console.log('hello' + name + '' + age)

}

function square(number){
    return number*number
}
// let number = square(3)
// console.log(number);
console.log(square(2));

