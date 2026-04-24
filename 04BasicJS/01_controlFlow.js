// node 04BasicJS/01_controlFlow.js

// if statement
const isUserLoggedIn = true
const temperature = 35

if(temperature < 50){
    console.log("true");
}
else{
   console.log("false"); 
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);    
}
const balance = 1000
if(balance > 500) console.log("test");

if (balance < 500){
    console.log("less than 500");  
}
else if(balance < 750){
    console.log("less than 750"); 
}
else if(balance <950){
    console.log("less than 950");  
}
else{
    console.log("balance is greater than 950");   
}
 
const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}
if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("user is logged in");  
}

// nullish coalescing operator(??): null ,  undefined

let value1 
// value1 = 5 ?? 10
// value1 = null ?? 10
// value1 = undefined ?? 15
value1 = null ?? 100 ?? 10
console.log(value1);


// terniary operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("order") : console.log("out of budget");

