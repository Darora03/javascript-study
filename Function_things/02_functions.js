
//... this is also known as rest operator or we can say spread operator
function calculateCartPrice(...num1){

return num1;

}
//console.log(calculateCartPrice(100,200,300,400));

const user = {
    username :"Tilak",
    articlename :"clear gel",
    price:180

}
//console.log(user.price);
function handleObject(anyobject){
    console.log(` the artice purchased by user: ${anyobject.username} is, ${anyobject.articlename} and the price is ${anyobject.price}`)
}
handleObject({
    username:"Dev",
    articlename:"levera 500mg",
    price:189
});

const myArray=[100,400,500,700];

function newPriceRangeList(anyArray){
console.log(anyArray[1]);
}
newPriceRangeList([200,600,500,800]);