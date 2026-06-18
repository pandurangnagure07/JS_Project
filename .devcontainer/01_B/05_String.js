const name ="Pandurang"
const repocount = 50

// console.log(name+repocount+"Value")
console.log(`hello my name is ${name} and my repo count is ${repocount}`) //Here ${ } is used to provide variable name

const gameName = new String('              Pandurang             ')

console.log(gameName[0])
console.log(gameName.__proto__)

const newString =gameName.substring(1,3)
console.log(newString)

const newString1 =gameName.slice(-1,3)
console.log(newString1)

const newString2 =gameName.trim()
console.log(newString2)

const url="https://hite%456sh.com/"

console.log(url.replace('%456',""))
console.log(url.includes("com"))
console.log(gameName.split('--'))