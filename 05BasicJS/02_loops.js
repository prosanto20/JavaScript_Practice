// node 05BasicJS/02_loops.js

//while loop
let index = 0
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash","batman", "superman"]
let arrIndex = 0
while (arrIndex < myArray.length) {
    //console.log(`the super hero is ${myArray[arrIndex]}`);
    arrIndex = arrIndex + 1
}

// do while loop
let score = 1
do {
    console.log(`the score is ${score}`);
    score ++
} while (score <= 10);