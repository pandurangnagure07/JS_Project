// const myArr=[0,1,2,3,4,5,6,7,8,9]
// const heroArr=['abc','chd','jdh']
// // console.log(myArr[4])

// const myArr1=new Array(10,20,30,40,50,60,70,80,90)
// // console.log(myArr1)


// myArr1.pop() //delete the last value
// myArr1.push(800) //add value in the l;ast
// // console.log(myArr1)

// //myArr1.unshift(12) //Insert value in start
// myArr1.shift() //Delete thwe first value in array
// // console.log(myArr1)

// // console.log(myArr1.includes(69)) //check value return boolean
// // console.log(myArr1.indexOf(69)) //If index not presesnt then gives '-1' value

// const newArr1= myArr1.join()
// // console.log(myArr1)
// // console.log(newArr1)
// // console.log(typeof newArr1)


// silce , splice
const myArr1=new Array(10,20,30,40,50,60,70,80,90)

console.log("A", myArr1)
const myn1=myArr1.slice(1,3) // first include(1) and second excluded(3) Slice - return index values but does not affect on main array 

console.log(myn1)
console.log("B",myArr1)

const myn2=myArr1.splice(1,3) // sp lice checks indexing and ignores or delets the indexing and give remaing array It directly affaects on the main array and return array list whcih is affected by the splice
console.log("C",myArr1)
console.log(myn2)