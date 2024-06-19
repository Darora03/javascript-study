//There are two types of datatypes
//1.primitive datatype
//number,string,boolen,null,undefined,symbol
const score=100;
const cgpa=8.4;
const name="Dev";
const isLoggedIn=false;
const temperature =null;
let mailId;
console.log("Showing outputs of datatypes");
console.log(score);
console.log(cgpa);
console.log(name);
console.log(isLoggedIn);
console.log(temperature);
console.log(mailId);
const id= Symbol('123');
const anotherId= Symbol('123');
console.log("Now here we check weather both id equal or not as because it contain the same value");
console.log(id == anotherId);//equals

console.log(id ===anotherId);//strict check
console.log("Now we are checking the typeOf datatypes");
console.log(typeof(score));//number
console.log(typeof(cgpa));//number
console.log(typeof(name));//string
console.log(typeof(isLoggedIn));//boolean
console.log(typeof(temperature));//null
console.log(typeof(mailId));//undefined
console.log(typeof(id));//symbol
console.log(typeof(anotherId));


//2. Nonprimitive datatype
console.log("Here we are discussing about non primitive datatypes");
//1.array
//2.object
//3.function
console.log("Here first we are seeing an example of array");
const heroes=["Shaktiman","Sabu","Chacha Choudhary"];
console.log(heroes);
//objects

let obj1={
    name:"Devkaran",
    age:23
    
}
console.log(obj1);

let myFunction= function(){
    console.log("Hello World");
}
//typeof
console.log(typeof myFunction)


