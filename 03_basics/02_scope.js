

let number1=100
const number2=200
var number3=300 //var not preferred after es6

if(true){

    //this is a local scope and mainly inside curley braces
    let number1=1
    const number2=2
    var number3=5

    //console.log(`Number2 inside local scope is ${number2}`);
    
}

// console.log(number1);
// console.log(number2);
// console.log(number3);


function one(){
    const username="Gaurav_kale"
    function two(){
        const email=" gaurav@gmail.com"
        console.log(username+email);
    }
    two()
    //console.log(email);//can not access because of scope  
}
one()


addDetails()
function addDetails(){
    console.log("Hello , Details added successfully")
}

//info(5) //this will not work because we are trying to access before function stored in variable , this is different from regular function decleration
const info=function(num){
    console.log(`"The number is ${num}"`);
}
info(5)