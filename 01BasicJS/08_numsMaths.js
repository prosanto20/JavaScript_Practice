// node 01BasicJS/08_numsMaths.js
const score = 400 
//console.log(score);

const balance = new Number(100)// object type declaration.
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);

//console.log(balance.toFixed(2));

const otherNumber = 23.8546
//console.log(otherNumber.toPrecision(4));

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

//Maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(3,4,9,7));
console.log(Math.max(3,4,9,7));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+ min)




