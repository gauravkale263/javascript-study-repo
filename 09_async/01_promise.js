console.log("Start");


function first() {
    for (let index = 0; index < 150; index++) {
        
        console.table(index);
        
    }
}

setTimeout(()=>{
    console.log("Inside timeout"); 
},1000);

first();
console.log("End");
