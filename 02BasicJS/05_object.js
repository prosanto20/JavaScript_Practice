// node 02BasicJS/05_object.js

// object de-structing
const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "Hitesh"
}
//console.log(course.courseInstructor);
const {courseInstructor} = course
console.log(courseInstructor);// not named
const {courseInstructor: instructor} = course
console.log(instructor); // named

// {
//     "name": "prosanto",
//     "courseName1": "js",
//     "price": "free"
// }