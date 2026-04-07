//node 01BasicJS/06_memoryType.js
// types = stack(primitive) and Heap(non-primitive)

let myName = "morax";
let anotherName = myName;
anotherName = "Zhongli";

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@gmail.com",
    userId: 1234,
}
let userTwo = userOne
userTwo.email = "morax@gmail.com"

console.log(userOne);
console.log(userTwo);
