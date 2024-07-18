const  map = new Map();
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")


//console.log(map);

for(const [key,value] of map ){
   // console.log(key,":-",value)
}
/*
for(const key of map ){
    console.log(key);
}
    */
   
  // for of doesn't work in case of objects
   //object is not iteratable
//for of iterate doesn't work in case of objects
//ror: myObject is not iterable
const myObject = {
    game1:"NFS",
    game2:"Spiderman"
}
for(const [key,value] of myObject){
    console.log(key,":-",value);
    //ror: myObject is not iterable
}
    