const marvelHeroes =["IronMan","Hulk","CaptainAmerica","Spiderman","Thor"]
const dcHeroes=["Batman","Superman","Wonderwomen"]

//marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][2])

marvelHeroes.concat(dcHeroes)
// console.log(marvelHeroes)

const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const allHeroes1=[...marvelHeroes,...dcHeroes] /// '...' it is a spread operator which gives values in return like concatination return type is list
// console.log (allHeroes1)

const numbers_Array=[1,2,3,4,[5,6,7],8,9,10,[11,12,13,[16,17,18]],14]
const usable_Number_Array= numbers_Array.flat(Infinity)
// console.log(usable_Number_Array)

console.log(Array.isArray("Pandurang")) // array
console.log(Array.from("Pandurang")) 
console.log(Array.from({name:"Pandurang",age:26,Department:"Computer Science"}))

let score = 100
let score1 = 200
let score2 = 3000
console.log(Array.of(score,score1,score2)) //'Array.of' - method create a arrayof different variables 