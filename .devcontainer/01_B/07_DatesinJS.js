//Date function 

let myDate =new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCraetedDate = new Date(2036,12,23)
// console.log(myCraetedDate)
// console.log(myCraetedDate.toLocaleString())

let myCraetedDate1 = new Date("01-14-2026")
// console.log(myCraetedDate1.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCraetedDate1.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getHours())
console.log(newDate.getSeconds())

newDate.toLocaleString('default',{
   weekday: "long",
   hourCycle:24
})