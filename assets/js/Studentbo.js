let student = {
    name:"ABC",
    USN :"ADSF454",
    age: 20,
marks:[85,40,50,65]
};
console.log("student object",student);
//convert the object into string
let jsonString = JSON.stringify(student)
console.log("joson formate",jsonString);
//convert the string into object
let stringObject = JSON.parse(jsonString)
console.log("parse object",stringObject)
let book = [
    {title:"movie", aut :"rani",price:1000},
    {title:"abc", aut :"raju",price:1500},
    {title:"studnet", aut :"ravi",price:2000},

]
console.log("book object",book);