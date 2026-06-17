/*

In javascript undefined Variable value bydeafult is "undefinded"

Const - Use only when need of same output once created you cannot update it 
let -
Prefer Not to use 'var' because of issue in block scope and functional scope

console.log(account_Id); //This is for single 'objcet/Variable' print
console.table([account_Id,account_Email,account_Password,account_City]) // Use this for multiple 'varibale/object' print 
*/


const account_Id = 2041   //const we cannot change once we created with const | Mostly usable in JS 
let account_Email='pandurangnagure@gmail.com' // let-Mostly usable in JS 
var account_Password='pandurang'
    account_City='Pune'
let account_State;

//

//account_Id=2
account_Email='abcd@gmail.com'
account_Password='ABCD'
account_City='Satara'

console.log(account_Id); //This is for single 'objcet/Variable' print
console.table([account_Id,account_Email,account_Password,account_City,account_State])