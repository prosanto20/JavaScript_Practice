// node 03BasicJS/04_IIFE.js
// immediately invoked function expressions(IIEF)


(function chai(){
    // named iife
    console.log(`DB connected`);   
}) ();
//chai()

( () =>{
    // unnamed iife
    console.log(`DB connected two`);  
})();// this semi-colon is used for stop executing this block of code explicitly


( function errorTesting() {
    console.log(`DB connected three`);  
})();

( (name) =>{
    // unnamed iife
    console.log(`DB connected ${name}`);  
})("Prosanto");