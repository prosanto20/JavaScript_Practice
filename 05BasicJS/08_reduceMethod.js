// node 05BasicJS/08_reduceMethod.js

const myNum = [1,2,3,4]
const myTotal = myNum.reduce( function (acc,currval) {
    //console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)

//console.log(myTotal);

const myTotal1 = myNum.reduce( (acc,curr) => acc+curr, 0)
console.log(myTotal1);


const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 3999
    },
    {
        itemName : "Mobile dev Course",
        price : 12999
    },
    {
        itemName : "DS Course",
        price : 9999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) =>acc + item.price,0)

console.log(priceToPay);
