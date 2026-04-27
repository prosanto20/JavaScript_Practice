// node 05BasicJS/04_arrayLoops.js

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift: "Swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]
for (const key in programming) {
   console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('BAN', "Bangladesh")
// map.set('RUS', "Russia")

// for (const key in map) {
//     console.log(key);
// }