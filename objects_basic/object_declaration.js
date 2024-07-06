
//const tinderUser= new Object();
//const tinderUser ={}
//tinderUser.id ="123abc"
//tinderUser.name ="Priyanshi"
//tinderUser.email ="priyanshi@google.com"
//tinderUser.isLoggedIn= false

//console.log(tinderUser);
 

//nested objects

const regularUser={
    email:"sonu11@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Soniya ",
            lastName:"Choubey"
            }//end user
    }//end fullName
}//end regularUser

//console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

 //const obj3 =Object.assign({},obj1,obj2); This is one Way ..//assign method is used to merge other object into an object,basically marge different sources into one target.
const obj3 = {...obj1,...obj2}
console.log(obj3);