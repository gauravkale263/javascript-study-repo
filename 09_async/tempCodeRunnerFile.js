
// setTimeout(function(){
//     console.log("SetTimeout");
// },1000);

// Promise.resolve().then(()=>{
//     setTimeout(()=>{
//         console.log("Inside promise");
//     },1000)
// });

// console.log("-------------------------");

Promise.reject().catch(()=>{
    console.log("Hello");
});