const number=1999.6164161
// console.log(number)

const balance=new Number(1000)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed())

const nextNumber=123.89556
// console.log(nextNumber.toPrecision(4))

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN')) //Indian
// console.log(hundred.toLocaleString()) //Local works like USA


// ****************MATHS***************

// console.log(Math)
// console.log(Math.abs(-4))  //ABS MAKES NEGATIVE NUMBER INTO POSITIVE IT ONLY WORKS ON NEGATIVE
// console.log(Math.round(4.46)) //ROUND UP TO NEXT POINT VALUE IS MORE THAT 5.1
// console.log(Math.ceil(5.42)) //ROUND UP TO NEXT VALUE DIRECTLY
// console.log(Math.floor(8.96)) //ROUND UP VALUE TO SAME VALUE IT DOES NOT INCLUDE POINT VALUE 

console.log(Math.random()) //comes value between 0 to 1
console.log((Math.random()*10)+1)
console.log((Math.random()*10)+1)

const min_value=10
const max_value=20

console.log(Math.floor(Math.random() *(min_value-max_value +1))+min_value)
