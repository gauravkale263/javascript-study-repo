//Immediately Invoked Function Expression(IIFE)


(function addition(){
    console.log("Hello this is immediately invoked function");
    
})();  //semicolon is really important in this scenario


//here we are writing self invoked arrow function

((name)=>{
   console.log(`Hello ${name}`);
   
})("Gaurav");

//the question why to use immediately invoked function expression
//“The global scope is the shared space where all files and scripts can access variables/functions. IIFE helps by wrapping code inside a private scope, so variables don’t leak into the global scope, preventing conflicts and pollution.”