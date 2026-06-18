/*
There are two types of data
1)Primitive data types    (Stack memory)
2)Non-primitive data types(heap memory)

1) Primitive
 a) String b)boolean c)Number d)null 5)undefined 6) symbol 7)BigInt

2) Non-Primitive (Reference)
 a) Array  2)String  3)Object  4)Functions  5)

*/

const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id ===anotherId)

const bigNumber = 1846133484132061650665n  // n- for showing number is BigInt
//console.log(bigNumber)
console.log(typeof bigNumber)


const Heros =["Shaktimaan","Hanuman","Kilwish"]

let myObj= {
    name: "Pandurang",
    age: 45 
}
console.log(typeof myObj)
console.log(typeof outsideTemp)

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)


let myDept ="Computer Science"
let myOtherDept = myDept
myOtherDept ="BSC"

console.log(myDept)
console.log(myOtherDept)

let user1={
email : 'pandurangnagure07@gmail.com',
upi:'123@ybl'
}

let user2=user1

user2.email="xyz@gamail.com"

console.log(user1.email)
console.log(user2.email)




