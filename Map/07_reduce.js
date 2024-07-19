 const array1 =[1,2,3];

 const newArr= array1.reduce((acc,callval) =>acc+callval,0);
 //console.log(newArr)

 const shoppingCourses=[

   {
    courseName:"JS Mastery Course",
    price :2999
   },
   {
    courseName:"java Devloper Course",
    price :7999
   },
   {
    courseName:"Pyhton course",
    price :999
   },
   {
    courseName:" Data scientist Course",
    price :12999
   },
   {
    courseName:"Business Analyst Course",
    price :5000
   },
   {
    courseName:"Dsa Course",
    price :3999
   }


 ]//closing array

 const cartTotal= shoppingCourses.reduce((acc,item) =>acc+item.price,0);
 console.log(cartTotal)
