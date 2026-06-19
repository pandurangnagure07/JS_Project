//Singleton - Constructor
//Object.create


//Object literals  (It is not singleton)

const mySym= Symbol("Key1")

const Juser={
     name:"Pandurang",
     [mySym]:"myKey1",  // output is in the SYMBOL FORMAT
      mySym:"myKey1",  // output is in normal format
     age: 26,
     location:"Pune",
     email:"pandurangnagure07@gmail.com",
     isLoggedIn:  false,
     lastLoginDays: ["Monday","Saturday"]
}

// console.log(Juser.email)
// console.log(Juser["email"])
// console.log(Juser[mySym])
// console.log(Juser)

// Juser.email="xyz@gmail.com"
// console.log(Juser)
// Object.freeze(Juser)  //It freez the object does not allow changes
// Juser.email="ABC@gmail.com"
// console.log(Juser)

Juser.greeting = function(){
     console.log(" Hello js user")
}

Juser.greeting1 = function(){
     console.log(`Hello JS user, ${this.name}`)
}
console.log(Juser.greeting)
console.log(Juser.greeting1())

