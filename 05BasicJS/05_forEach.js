// node 05BasicJS/05_forEach.js

const codding = ["js","rb","py","java","cpp"]

codding.forEach( function (item){
    //console.log(item);
})

codding.forEach( (item) => {
    //console.log(item);
} )

function printMe(value){
    //console.log(value);
}
codding.forEach(printMe)

codding.forEach( (item,index,arr) => {
    //console.log(item , index, arr);
})

const myCoding =[
    {
        languageNanme: "Javascript",
        fileExtension: "js"
    },
    {
        languageNanme: "Java",
        fileExtension: "java"
    },
    {
        languageNanme: "Python",
        fileExtension: "py"
    }
]
myCoding.forEach( (item)=> {
    console.log(item.languageNanme);
})
