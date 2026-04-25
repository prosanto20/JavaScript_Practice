// node 05BasicJS/03_loops.js

// for-of loop
// ["","",""]
// [{},{},{}]

const myArray = [1,2,3,4,5]

for (const num of myArray) {
    //console.log(num);  
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`each character is ${greet}`);  
}

// maps ( values will be unique)
const map = new Map()

map.set('IN', "India")
map.set('BAN', "Bangladesh")
map.set('RUS', "Russia")

//console.log(map);

for (const [city] of map) {
    //console.log(city);
}
for (const [city,value] of map) {
    //console.log(city, ':-' ,value);
}


// objects are not iteratable by Map 
const myObject ={
    game1 : 'clash of clans',
    game2 : 'pubg'
}
for (const [game,gamename] of myObject) {
    console.log(game, ':-' ,gamename);
}