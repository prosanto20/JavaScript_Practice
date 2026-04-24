// node 04BasicJS/03_truthy.js

// truthy  and falsy value
//const userEmail = "pro@gmail"
//const userEmail = "" // output will be false for empty string
const userEmail = [] // output will be true for empty array

if(userEmail){
    console.log("got user email");  
}
else{
   console.log("don't have user email"); 
}

// truthy values: "0" ,'false',
// " " , [] , {} , function(){}

// falsy values: false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN

if(userEmail.length === 0){
    console.log("array is empty");    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}