//lec-17 & lec-18
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
const obj4 ={5:'a',6:'b'}

//const obj3 ={obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3) 

const users =[
    {id:1,
     email:"xyz@gmail.com"   
    },
    {
      id:2,
     email:"abc@gmail.com"    
    },
     {id:1,
     email:"xyz@gmail.com"   
    },
    {
      id:2,
     email:"abc@gmail.com"    
    }
     ,
     {id:3,
     email:"xyz@gmail.com"   
    },
    {
      id:4,
     email:"abc@gmail.com"    
    }
]


users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// ---------------------------------------------lec 18--------------------------------------

const course={
        courseName:"Js in hindi",
        price:'999',
        courseInstructor:"Pandurang"
}

const{courseInstructor}=course //This is first way to check instructor or obj
console.log(courseInstructor)

const{courseInstructor:CIN}=course //This is second way to check instructor or obj
console.log(CIN)


/*
this is related to destructing in React.js
const navBar=({company})=>{
        console.log(navBar)
}

navBar(company="Pandurang")

--------This is JSON format----- 
{
    name:"pandurang",
    courseName:"JS in hindi",
    price:"free "
}
    */