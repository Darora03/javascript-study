//falsy value 
//false,0,-0,BIgInt 0n,"",null,undefined,NaN

//truthy value
//true,"0",'false'," ",[],{},function(){}


//const userEmail="d@devarora.ai";condition 1=when value is true 
//const userEmail="";empty string it will gave falsy value
//const userEmail=[];empty array gives truthy value
//const userEmail=undefined;
const userEmail=[];
userEmail?console.log("Got user Email"):console.log("Don't have an user email");
/*
if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have an user email");
    
}
    */
/*
//to checked weather given array is empty or not
if(userEmail.length===0){
    console.log("Array is empty");
} 


//now how can you check wheather given object is empty or not



const emptyObject ={}
if(Object.keys(emptyObject).length===0){
 console.log("Object is empty");
}
*/
/*
//Nullish coalescing Operator(??):null undefined

let val1;
//val1= 5??10 =>5
//val1= null??10 =>10
//val1= undefined??10 =>10
//val1 =undefined??10??20 =>20
val1 =undefined??20??10
console.log(val1);
*/
//terneary opeartor

//condition?true:false