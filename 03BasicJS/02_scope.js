// node 03BasicJS/02_scope.js

let a = 3
if(true){
    let a = 100
    const b = 200
    var c = 300 // it creates a problem 
    console.log("inner: ",a);
    
}
console.log(a);
//console.log(b);
//console.log(c);