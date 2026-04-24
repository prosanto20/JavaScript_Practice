// node 03BasicJS/03_arrowFunction.js
const user ={
    username: "prosanto",
    price: 900,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);// in this case the output will be an empty object

function chai() {
    let username = "prosanto"
    console.log(this.username);   
}
chai()


const chai1 = function(){
    let username = "prosanto"
    console.log(this.username); 
}
chai1()

// arrow function
const chai2 = () =>{
    let username = "prosanto"
    console.log(this.username); 
}
chai2()

const addThree = (num1 , num2)=>{
    return num1 + num2
}
console.log(addThree(3,4));

// implicit return arrow function
// const addFour = (num1 , num2)=> num1 +num2
// const addFive = (num1 , num2)=> (num1 +num2)

const addSix = (num1 , num2)=> ({username: "prosanto"})
console.log(addSix());
