/*
  Conversion of Data type 
  if 33--> 33
  33abc--> NaN
  null --> 0
  true --> 1

*/
let score = "33"
let score1 = "33a"
let score2 = null
let score3 = true

//console.log(typeof score)
//console.log(typeof(score))

// let valueInNumber= Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// let valueInNumber1= Number(score1)
// console.log(typeof(valueInNumber1))
// console.log(valueInNumber1)

// let valueInNumber2= Number(score2)
// console.log(typeof(valueInNumber2))
// console.log(valueInNumber2)

// let valueInNumber3= Number(score3)
// console.log(typeof(valueInNumber3))
// console.log(valueInNumber3)


// if true--> 1; false -->0
let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// if ""--> 0; 
let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

// "Pand"-->1
let isLoggedIn2 = "Pandurang"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)


