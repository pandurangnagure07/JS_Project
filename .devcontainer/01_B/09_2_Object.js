//const tinderUser = new Object()
//console.log(tinderUser)

const tinderUser={}
tinderUser.id="ABC123"
tinderUser.name="SUPERMAN"
tinderUser.isLoggedIn= true

//console.log(tinderUser)

const regularUser ={
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName:"Pandurang",
            lastname:"Nagure"

        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName)

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',4:'b'}

const obj3 ={obj1,obj2}
console.log(obj3) 
