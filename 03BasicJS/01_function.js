// node 03BasicJS/01_function.js

function sayMyName(){
    console.log("prosanto");   
}
//sayMyName()

function addTwoNum(number1 , number2){
    console.log(number1 + number2);   
}
//const result = addTwoNum(3,4)
// console.log("result:" , result);

function addTwoNum1(number1 , number2){
    let result = number1 + number2
    return result
}
const output = addTwoNum1 (1,2)
//console.log("result:" , output);

function addTwoNum2(number1 , number2){
     return number1 + number2  
}
function loginUserMessage(username= "Admin")
//function loginUserMessage(username)
{
    // if(username === undefined)
       if(!username) {
        console.log("please enter a username");
        return  
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Prosanto"))
//console.log(loginUserMessage())

//shopping card 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));
function calculateCartPrice1(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500));

const user = {
    username : "prosanto",
    price: 100
}
function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}
handleObj(user)


function handleObj1(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);   
}
handleObj1({
    username: "pro",
    price: 200
})

const newArray = [200,300,400]
function returnArrayValue(getArray){  
    return getArray[0]
}
console.log(returnArrayValue(newArray));
