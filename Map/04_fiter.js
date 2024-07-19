const coding = ["java","js","ruby","python","cpp"]
/*
const values =coding.forEach((item) =>{
console.log(item);

});
 console.log(values)//gives undefined because when you gave an scope you need to return the value
 */
/*
 const values =coding.forEach((item) =>{
    console.log(item);
    return item;
    });
     console.log(values)//gives undefined
     */

 const myNums=[1,2,3,4,5,6,7,8,9,10];
/*
// const newNum=myNums.filter((num) => num>4);//here we dont use scope so need to retuen value
 const newNum=myNums.filter((num) => {
    return num>4
 });

 console.log(newNum)
*/
//How to do the same thing by foreach
const newNums=[];

myNums.forEach((num) =>{
    if(num>4){
        newNums.push(num);

    }//closing if

})//closing for each
console.log(newNums)