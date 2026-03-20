//01BasicJS/03_conversionOperation.js

let score = null;

console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);//if the number is not pure number output will give NaN(not a number even if conversion is done)

/*variable values
  33 => 33
  33a => NaN
  true => 1 false => 0
  null => 0
  undefined => NaN
  string => NaN
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/* 
1 => true 0 => false
"" => false ("" it means empty string)
"prosanto" => true
*/

let anumber = 33;
let stringNumber = String(anumber);
console.log(stringNumber);
console.log( typeof stringNumber);

 
// Operations
let value = 5;
let negValue = -value;
console.log(negValue);

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3**4);
// console.log(3/3);
// console.log(3%3);

let str1 = "hello";
let str2 = " prosanto";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1"+ 2 +2); //considered as string
console.log(1+ 2 +"2");

console.log(true);
console.log(+true);
//console.log(true+); // will show error
console.log(+"");

