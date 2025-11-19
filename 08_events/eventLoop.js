
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