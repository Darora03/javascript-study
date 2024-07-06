

function getTwoNumber(number1,number2){

    return number1+number2;
}
//let result  =getTwoNumber(3,null);
//console.log("result: "+result);

function loginUserMessage(username = "Ved"){
  //  if(username===undefined){
    //    console.log(`please enter a username`)
      //  return 
   // } one way 
   //othr way::
   if(!username){
    console.log(`please mention an username `)
    return;
   }

    return `${username} : just logged in`;
}
console.log(loginUserMessage("Prabhu"));