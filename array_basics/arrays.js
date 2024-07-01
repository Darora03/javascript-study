//Here we are learning how to declare array
//How to instantiate an array
//also some of the properties of array.

const heroes =["Shaktimaan","Sabu","Chacha Choudhary","Hero"];
//console.log(heroes);
//console.log(`The total  number of heroes are ${heroes.length}`);
//console.log(`The name of heroes are as follows ${heroes.toString()} `)
//console.log(heroes[0]); this is manually, 
//let's try doing it with loop

//for(let i=0;i<heroes.length;i++){
  //  console.log(heroes[i]);
//}
//heroes.push("Chota Bheem");

//const newArr= [0,1,2,3,4,5];
//console.log(newArr);
//newArr.push(8);=>used to push elements in an array ,by giving the element value
//newArr.pop(); =>Here pop is used to pull out the element from the array.last element will be pull out

//newArr.unshift(9);=>Here the element is stored on the index
//newArr.shift();=>shift is used to elemenate the first index element


//console.log(newArr.includes(1));//it checks weather 9 is  present in array,It will give result as boolean
//console.log(newArr.indexOf(19));// if the element is present in the array ,it will print the element value , But if the value is not present in the array 
//it will return -1.
//console.log(newArr);
//const myNewArr= newArr.join();//join method is used to convert array into string.
//console.log(typeof myNewArr);
//console.log(myNewArr);
//************************* *//
const newArr1=[0,1,2,3,4,5]
console.log("A:", newArr1);
const myNew1 = newArr1.slice(2,5);
console.log(myNew1);
console.log("B",newArr1);
const myNew2= newArr1.splice(2,5);
console.log("C",newArr1);
console.log(myNew2);







