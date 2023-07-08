let variable = "hello"
// variable = 12
variable = "hii"


let age = 18
// age = "hello"
age = +"hello"



let testBoolean: boolean ;
let testBoolean2: boolean = true; //by defualt bhi value de sakte hai...
testBoolean = false;



let testStringOrNumber : string | number
testStringOrNumber = 78 
testStringOrNumber = "heeloo" 



let names = ["aman","amit","aryan"]
// names.push(3)
names.push("rohan")




// stringArray
let stringArr : string[]
// stringArr = [1,2,3,4]
stringArr = ["aman", "singh", "rajawat"]



// unionArray

let unionArr: (string | number)[]
unionArr = ["one", 2, "three", "four", 5,6,7,8,9]



let user = {
   userName:"jane",
   age:29,
   isAdmin:true
}
// user.age = "eighteen"
user.age = 34




let testAny: any
testAny = 12
testAny = "tweleve"
testAny = false
testAny = [false]
testAny = {false:1}