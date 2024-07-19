const coding = ["java","js","ruby","python","cpp"]
/*
//Tarika  NO.1
coding.forEach(function (item)  {

       console.log(item);
});

//Tarika no 2
coding.forEach((item,index) =>{

console.log(index,item)
}) 

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
//other ways

coding.forEach((item,index,arr) =>{

    console.log(index,item,arr)
    }) 
    */
   const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
           languageName:"java",
        languageFileName:"java"
    },
    {
           languageName:"python",
        languageFileName:"py"
    }
   ]
   myCoding.forEach((item) =>{
    
    console.log(item.languageFileName)
   });
