console.log("Start");

setTimeout(()=>{
   console.log("This is set timeout");
},2000)

const myName=new Promise((resolve)=>{
    console.log("Inside a promise");

    setTimeout(()=>{
        resolve("Done after 2 sec");
    },2000)

});
myName.then((msg)=>console.log(msg));

console.log("End");