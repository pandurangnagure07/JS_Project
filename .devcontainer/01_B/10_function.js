//Lecture--19   

// function sayMyName(){
// console.log("P")
// console.log("A")
// console.log("N")
// console.log("D")
// console.log("U")
// console.log("R")
// console.log("A")    
// console.log("N")   
// console.log("G")  
// }

// sayMyName  //This is reference
// sayMyName() //

function addTwoNumbers(num1,num2){             //This is one way to write program
   console.log(num1+num2) 
}
// addTwoNumbers(59,82)
// addTwoNumbers(59,"A")
// addTwoNumbers(59,null)

function addTwoNumbers(num1,num2){               //This is second way to write program 
  let result =num1+num2
  console.log("Pandurang")
  return result
}
const result =addTwoNumbers( 3,5)
console.log("Result: ",result)


function addTwoNumbers(num1,num2){                // This is third way to write program
  return num1+num2
}
console.log("Result: ",result)


function loginUserMessage(userName="TCS"){
  if(!userName){                                //(userName===undefined) we can write this way  or this wah (!undefined)
    console.log("Please enter username")
    return 
  }
   return`${userName} just logged in`
}

//console.log (loginUserMessage("Pandurang"))
console.log (loginUserMessage())

function calculationCartprice(val1,val2,...num1){
    return val1,val2,num1
}
console.log(calculationCartprice(100.200,400,855,569,5784,852))


const user ={
  userName:"Pandurang",
  price:5897
}

function handleObject(object){
  console.log(`Username is ${object.userName} and the price is ${object.price}`)
}

//handleObject(user)

handleObject({
  userName:"Pranav",
  price: 15789
})

const myNewArray=[200,500,658,662,41448,264994]
function returnSecondValue(myNewArray){
  return myNewArray[1]
}

console.log(returnSecondValue(myNewArray))

