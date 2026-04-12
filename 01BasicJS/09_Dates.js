//node 01BasicJS/09_Dates.js

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);
 
//let myCreatedDate = new Date(2002, 0,20)
//let myCreatedDate = new Date(2002, 0,20 ,5,3)
//let myCreatedDate = new Date("2002-01-20")//yymmdd
let myCreatedDate = new Date("01-20-2002")//mmddyy
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getHours());

`${newDate.getHours()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long"
})