// node 02BasicJS/01_array.js

const myArr = [0,1,2,3,5]
console.log(myArr[0]);

const myHeros =["ironman","thor"]

const myarr2= new Array(1,2,3,4)

// array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()// last element removed

// myArr.unshift(8)
// myArr.shift()

console.log(myArr.includes(8));
console.log(myArr.indexOf(3));

console.log(myArr);

const newArray = myArr.join()
console.log(newArray);
console.log(typeof newArray);

// slice , splice method
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);


