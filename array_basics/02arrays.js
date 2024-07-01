
const marvel_heroes=["IronMan","Thor","Spiderman"];

const dc_heroes= ["Flash","Batman","Spiderman"]

//marvel_heroes.push(dc_heroes);//this is not good, because it gives a array which conatins some element and a different array.
//const all_heroes =marvel_heroes.concat(dc_heroes);
//console.log(all_heroes);
const all_new_heroes = [...marvel_heroes,...dc_heroes];//splash method expample glass fall and tukde splash
console.log(all_new_heroes);

const newArray = [1,2,3,[4,5,6],[6,7,[1,9,4]]];
const real_newArray =newArray.flat(Infinity);
console.log(real_newArray);
console.log(Array.isArray("Devkaran Arora"))//give boolean value?true:false.
console.log(Array.from("Devkaran"));//it convert into an array
console.log(Array.from({name:"Devkaran"}))//gives interesting values.....Gives an Empty array=>[]

    let score1= 100
    let score2 = 200
    let score3 =300
    console.log(Array.of(score1,score2,score3));//of used to returns a new arrays from other array object
