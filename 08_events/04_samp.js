
// let num=1;
// setTimeout(function (){
//     while(num<1000000){
//         num++;
//     }
//     console.log("Hell "); 
// },1000);

// console.log("Hello")

//write a code for event loop in js
console.log("Started");

setTimeout(()=>{
    console.log("inside first timeout");
},2000);
function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Loaded")
        },1000);        
    });
}
setTimeout(()=>{
    console.log("Inside second timeout");
},2000);
getData().then((result)=>console.log(result));
console.log("End");

//explaination:
// 1. "Started" is logged first because it's a synchronous operation.
// 2. Two setTimeout functions are scheduled to run after 2000 milliseconds.    
// 3. The getData function is called, which returns a Promise that resolves after 1000 milliseconds.
// 4. "End" is logged next because it's also a synchronous operation.
// 5. After 1000 milliseconds, the Promise from getData resolves, and "Data Loaded" is logged.
// 6. After 2000 milliseconds, both setTimeout callbacks are executed, logging "inside first timeout" and "Inside second timeout".
