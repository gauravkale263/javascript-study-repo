
// setTimeout(function(){
//     console.log("SetTimeout");
// },1000);

// Promise.resolve().then(()=>{
//     setTimeout(()=>{
//         console.log("Inside promise");
//     },1000)
// });

// console.log("-------------------------");

const flipCoin=new Promise((resolve,reject)=>{
    console.log("Fliping the coin");
    setTimeout(()=>{
        const isHead=Math.random()>0.5;
        if(isHead){
            resolve("HEAD You wins");
        }
        else{
            reject("TAIL You lose")
        }
    },2000);
});

flipCoin
    .then((result)=>{
        console.log("Success",result);
    })
    .catch((err)=>{
        console.log("Error",err);
    })
    .finally(()=>{
        console.log("Flip completed");
    });
