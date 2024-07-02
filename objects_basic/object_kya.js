//What is object and how do we use object properties.
const mySym = Symbol("Key1");
const jsUser= {

name:"Devkaran",
fullName:"Devkaran Arora",
[mySym]:"myKey1",
age:24,
City:"Indore",
email:"devarora@google.com",
isLoggedIn:false,
totalLoggedInWeek:["Monday","Wednesday","Friday"]

}

console.log(jsUser["fullName"]);
console.log( jsUser[mySym]);
console.log(jsUser)


jsUser.greeting =function(){
    console.log("Dear js User");

}
console.log(jsUser.greeting());
jsUser.greetingTwo =function(){
    console.log(`Dear js User ${this.fullName}, Welcome!`)
}
console.log(jsUser.greetingTwo());