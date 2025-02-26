let str = "sv university"

console.log(str.length)

str[0]="R"
console.log(str)

let arr=[1,2,3, "arka",1.2 ,true,false,null,undefined]
console.log(arr[3])
let svuclass = ["arka","b tech",3, "avijit",'b tech',3]

const obj = {
    arka : {class:"B Tech", year:3, rollno:63, subjects:["Dbms","cn","fs"]},
    avijit : {class:"B Tech", year:3, rollno:64, subjects:["Dbms","cn","fs"]}
    
}
console.log(obj.arka)
console.log(obj.avijit)
obj["1"]="sunny"
console.log(obj)

delete obj["arka"]
console.log(obj)