
const objectData={
    name:"Gaurav Kale",
    email:"gaurav@gmail.com",
    printName:function(){
       //fconsole.log(this);
        
       console.log("Hello ",this.name); 
    } 
}
objectData.name="Prasad"
objectData.printName()

//console.log(this);

//This is normal arrow function
const arrFun =(num1,num2)=>{
    console.log(this); 
   return num1*num2
}
console.log(arrFun(10,20));

//for single line arrow we do not have to use curley braces instead we use normal parantheses
const singleLineArrowFun = (num1,num2) =>(num1+num2)
console.log(singleLineArrowFun(10,20));


//Here we are accessing a object inside a arrow function

const arrowfunObj=()=>({name:"Gaurav Kale",email:"gaurav@gmai.com"})//that's why parentheses important here , we can not do this withot them
console.log(arrowfunObj());

/*What is the difference between normal and arrow function
=> The simple ans here is as follows
   Normal function can be constructor while arrow function can't be constructor
   A normal function has its own this, supports arguments, and can be used as a constructor. Arrow functions are shorter, don’t have their own this or arguments, and can’t be used with new. They’re best used for callbacks where we want lexical this.
*/


function add(...name){
    console.log(name);  
}

add("Gaurav","Prasad")