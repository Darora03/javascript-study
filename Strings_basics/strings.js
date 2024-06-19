const name ="Devkaran Arora";

const repoCount="5";

console.log(`My name is ${name} and my repo count is ${repoCount} `);

//console.log(`How to declare String `)

const gameName = new String("Devkaran Arora");
//console.log(gameName)
//console.log(gameName[3]);//this is not array
//console.log(gameName.__proto__);//basically it gives you all the methods of strings and as a result it shows {}-object
//console.log(gameName)//this is the original value
//console.log(gameName.toUpperCase());//while this change the value to upper case// But the real value remains the same
//console.log(gameName.charAt(2));
//console.log(gameName.length);
//console.log(gameName.toLowerCase());
//console.log(gameName.indexOf('a'));

const newString1 = new String("Devkaran-DK");
console.log(newString1.substring(0,3));//Dev
const anotherString = newString1;
console.log(anotherString.slice(-11,4))//

const newString2= new String("  Kartik  ")
console.log(newString2.trim());

//const url ="https://www.Devkaran.com/Devkaran%20Arora";
//console.log(url.replace('%20','-'));
//console.log(url.includes('Dev'));
console.log(gameName.split(' '))

