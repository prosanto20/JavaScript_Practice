// node 01BasicJS/07_string.js
const myname = "Prosanto"
const repoCount = 1

console.log(myname + repoCount +"value");//outdated method

console.log(`hello my name is ${myname} and my repository count is ${repoCount}`);//backtik me

const gameName = new String('OneAutumnLeaf')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('L'));
console.log(gameName.indexOf('l'));//console.log(gameName.indexOf('l'));output will be -1 meaning no valid position exists.

const newString = gameName.substring(0,9)
console.log(newString);

const anotherString = gameName.slice(0,5)
console.log(anotherString);

const anotherString1 = gameName.slice(-12,6)
console.log(anotherString1); // start num= length + start.

const newString2 = "   oneanutumn"
console.log(newString2);
console.log(newString2.trim());

const url = "https://one.com/one20%autumn"
//console.log(url.replace('20%','-'));
//console.log(url);
console.log(url.includes('one'));

const aString = new String('one-autumn-leaf') 
console.log(aString.split('-'));


