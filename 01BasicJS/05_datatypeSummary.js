// node 01BasicJS/05_datatypeSummary.js

// primitive
//7 types : String, Number, Boolean, Null ,Undefined, Symbol,,BigInt

const score = 100;
const scoreValue = 99.99;

const isLoggedIn = false;
const outSideTemp = null;
let usedEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 12345678998874511n

// Reference or non-primitive
// Array, Object, Functions

const archon = ["Morax","Bannet","Ei"]
let obj = {
    name: "Motax",
    age: 6000,
}

const myFunction = function(){
    console.log("This is Order");   
}

console.log(typeof bigNumber);
