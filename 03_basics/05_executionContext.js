//Here we got idea of how code runs in javascript line by line

 
console.log("Start")  //print first

setTimeout(()=>{
   console.log("Inside setTimeOut"); // print at last
},0)


Promise.resolve().then(()=>{
    console.log("Inside Promise");  //print third
})

console.log("End"); // print second


