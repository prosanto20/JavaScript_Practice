// node 03BasicJS/02_scope.js

let a = 3
if(true){
    let a = 100
    const b = 200
    var c = 300 // it creates a problem 
    //console.log("inner: ",a);
    
}
//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "prosanto"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "prosanto"
    if(username === "prosanto"){
        const website = " youtube"
        console.log(username + website);   
    }
    //console.log(website); //it will cause error
    
}
//console.log(username); //it will cause error

//interesting conncept
function addOne(number){
    return number + 1
}
addOne(5)

const addTwo = function(number){
    return number + 2   
}
addTwo(5)