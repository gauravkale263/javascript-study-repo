//here we are looking through truth and false values

const name=[]

if(name){
    console.log("Name is valid");  
}

//falsy values -> 0, NaN , Null , Undefined , "" , false , BigInt 0n, 0 
//truth values -> '0' , [] ,{} , 'false'->considered as a string , function(){}


//detecting empty object
const obj={name:'Gaurav Kale'}

if(Object.keys(obj).length===0){
    console.log("Object is empty");
}else{
    console.log("obj is not empty");
}


//Nullish coalescing operator ??

let myName=null;

let displayname=null??"Gaurav"
console.log(displayname);

myName=null??"Prasad"
console.log(myName);


//ternary operator with example

const valueOF=100
valueOF<=100?console.log("Less than 100"):console.log("Greater than 100");
