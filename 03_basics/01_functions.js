
//This is just a sample function used for addition
function add(number1,number2){
    return `The addition of numbers is ${number1+number2}`
}
//console.log(add(10,20));


//here giving by default value of username abc , if condition is never going to run because default
function userDetails(username="abc"){
    if(username===undefined){  //if(!username) same to use and preferred one
        console.log("Enter correct username")
        return   //ends the execution of the function
    }
    return `${username} logged in`
   // console.log("Never going to execute after return statement");
    
}
//we can also use new variable and store the return data into it
//console.log(userDetails("XYZ"))


const userInformation={
    name:"Gaurav Kale",
    email:"gaurav@gmail.com"
}


//one of the way to pass object to function
function getUserDetails(userDetails){
    return `Hello ${userDetails.name} and your email is ${userDetails.email}`
}

console.log(getUserDetails(userInformation))

const userArr=[10,20,30]

function getArray(arr){
    console.log(arr);
}

getArray(userArr)//can pass getArray([10,20,30])


//spreading also done 

function spreading(val1,...values){
    console.log(val1) //first element is stored in val1 and others are stored in values array as it create array for spreading
    
    console.log(values);
    
}
spreading(10,20,30,40)

let dataOf= ({...details})=>{
    console.log(details);
    
}
dataOf({name:"Gaurav",email:"abc@gmail.com"})