const score=200
if(score>100){
    const power ="Fly"
    console.log(`User power : ${power}`)
}
//console.log(`User power : ${power}`)--This will gave error  as because the scope of IF is in the if , but we are trying to access it as globally
const balance=1000

if(balance<500){
    console.log("balance less than 500")
}else if(balance<750){
    console.log("balance less than 750")
}else if(balance<900){
    console.log("balance less than 900")
}else{
    console.log("balance less than 1200")
}
const userLoggedIn= true;
const debitCard =true;
const loggedInFromGoogle =true;
const loggedInFromEmail= true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User successfully logged in ");

}
if(userLoggedIn && debitCard  ){
    console.log("User allowed to buy course ");
}