// console.log(this)

// let obj = {
//     Name : "Arka Koley" ,
//     class:"B Tech",
//     myFunction :function(){
//         //console.log(this)
//         //console.log(this.Name,this.class)
//         console.log("I am method in this object")
//     },
//     subjects:["dbmsc","Cn" , "ai" , "ml" ,"dl"],
//     newobj:{
//         1:12,
//         myNewFunction:function(){
//             //console.log(this)
//             return this[1]
//         }
//     }
// }
// console.log(obj.myFunction())
// console.log(obj.newobj.myNewFunction())

// const arrowFunction=()=>{
//     let a=10;
//     let  b=20;

//     return a+b
// }
// let ans = arrowFunction()
// console.log(ans)
// condition


// let num1 =20, num2=20;
// if(num1<num2){
//     console.log('${num1} is less than ${num2}');
// }












//lets suppos you have one num as input you have to check if num is multiply of 3 than print"fizz",
//  if numis multiplyof 5 than print"buzz".if num is multiply of both 3 and 5 than print fizzbuzz
// const num=15;
// if (num%5==0 &&num%3!=0){
//     console.log(buzz);
// }
// else if (num%3==0&&num%5==0){
//     console.log(fizzbuzz);
// }
// else{
//     console.log(fizz)
// }

let arr=[1,2,3,4,5,6,7,8]
for(let i=0; i >arr.length; i++){
    console.log(arr[i]);
}

let str ="Arka Koley"
for(let i=0; i<str.length; i++){
    console.log("a"+str[i]+"b")
}