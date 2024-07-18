
/*
//print number 1to 10
for (let i=1;i<=10;i++){
    const element =i;

console.log(element);

}

//Quest2:print no. 1to 10 and print 5 no. as the best no.
for(let i =1;i<=10;i++){
    const element =i;
    if(element==5){
        console.log(`5 is the best number`);
    }
    console.log(element);
}

//Question no.3:print number from 1 to 10 in outer and nested loop

for(let i=1;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        console.log(`inner loop value: ${j}  and inner loop:  ${i}`)
    }
}
   
   //quest4: print table from 1to 10
   for(let i=1;i<=10;i++){
  console.log(`table of : ${i}`)
    for(let j=1;j<=10;j++){
        console.log(i+"*"+j+"="+i*j);
    }
} 
     
    //question 5 :print star pattern
let n=5;
let string1="";
    for(let i=0;i<5;i++){
        for(let j=0;j<=i;j++){
           string1+="*";
        }//j
         string+="\n";
      } //j
    
      console.log(string);
      */
     const mySuperHeroes = ["Thor","Ironman","Black Panther","Spiderman"]
     console.log(`No. of super heroes are : ${mySuperHeroes.length}`)
     for(let index=0;index<mySuperHeroes.length;index++){
        const fetchElement= mySuperHeroes[index];
        console.log(fetchElement);
        if(fetchElement==="Thor"){
            console.log(`Statement : Me Hu Odin putra and Bijli ka devta. `);
        }else if(fetchElement==="Ironman"){
            console.log("Statement : Tu janata h me kon hu?")

        }else if(fetchElement==="Black Panther"){
            console.log("Statement : Wakanda Forever")
        }else if(fetchElement==="Spiderman"){
            console.log("Statement : Me dikhta h sweet innocent swami type ka lekin , me h harami type ka")

        }else{
            console.log("mujhe bhi nhi pta me hu kon");
        }
      
        
      
    
     }
