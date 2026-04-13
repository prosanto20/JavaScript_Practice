// node 02BasicJS/02_array.js

const marvelHeros = ["ironman","thor","Cap"]
const dcHeros = ["superman","batman","flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// spread operator
const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

//
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr = anotherArr.flat(Infinity)

console.log(realAnotherArr);

console.log(Array.isArray("pro"));
console.log(Array.from("pro"));
console.log(Array.from({name: "pro"}));//interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

