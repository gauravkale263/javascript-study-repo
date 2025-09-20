//to accept input from user this is required
const prompt = require('prompt-sync')()

const condition=true

if(condition){
    console.log("Hello condition is true");
}

//Here we just tested our if else control flow statement

let userName=prompt("Enter username:");

if(userName.length<=10){
    console.log("Its a valid username ",userName);
}else{
    console.log("Enter valid username:");
    userName=prompt("Enter username again: ")
    console.log(`Username is ${userName}`);    
}

//