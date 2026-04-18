// node 02BasicJS/04_object.js

const tinderUser = new Object() //singleton obj
const tinderUser1 = {} // non singleton obj

tinderUser1.id = "123abc"
tinderUser1.name = "pro"
tinderUser1.isLoggedIn = "false"

//console.log(tinderUser);
//console.log(tinderUser1);

const regularUser = {
    email: "user@gamil.com",
    fullname: {
        userName:{
        firstName: "Prosanto",
        lastName: "Paul"
    }
    }
}
//console.log(regularUser.fullname.userName);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
//const obj3 = { obj1 , obj2}
//const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
      {
        id: 2,
        email: "user2@gmail.com"
    },
]
console.log(users[0].email);
console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isloggedIn'));
