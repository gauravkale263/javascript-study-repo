
// //This is a simple callback function using promise to avoid callback hell
// function mainFunction(anotherFun){
//   return new Promise((resolve)=>{
//     setTimeout(anotherFun,2000);
//     resolve();
//   })
// }

// function data(){
//     console.log("This is required work");
    
// }

// mainFunction(data).then(()=>{
//     console.log("After promise");
// });

async function showMessage() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Done after 2 sec!"), 2000);
  });

  let result = await promise; 
  console.log(result);
}

showMessage();

//write a program to add two numbers in js
