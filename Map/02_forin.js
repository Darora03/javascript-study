const myObject= {
    js:"javascript",
    cpp:'c++',
    rb:'ruby',
    swift:'swift by google'
}
for(const key in myObject){
   // console.log(`${key} shortcut is for ${myObject[key]}`)
}
// for in- in object we saw  that we can acces value by just key only
//but in case of array this thing doesn't work,you have to give
//programming[key]
const programming =["js","rb","py","java","cpp"];
for (const key in programming) {
       console.log(programming[key])
} 