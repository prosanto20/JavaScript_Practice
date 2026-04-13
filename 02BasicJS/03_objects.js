// node 02BasicJS/03_objects.js

// singleton object
//Object.create

//object literals

const jsUser = {
    myName: "Pro",
    "full name":"pro",
    age: 24,
    location: "Dhaka",
    email: "pro@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","sunday"]
}
jsUser.email = "pro@email.com"// to change or override values

// Object.freeze(jsUser)
// jsUser.email = "pro@chatgpt.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");    
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.myName}`);    
}
console.log(jsUser.greetingTwo());

// console.log(jsUser.email);
//console.log(jsUser["email"]);
// //console.log(jsUser.full name);// cant be accessed using . method
// console.log(jsUser["full name"]);

//symbol
const mySym = Symbol("key1")
const symObject = {
     [mySym]: "mykey1" // to get symbol
}

// console.log(symObject.mySym);
// console.log(typeof symObject.mySym);

//to access as an symbol
console.log(symObject[mySym]);
console.log( typeof symObject[mySym]);
console.log(typeof mySym);

