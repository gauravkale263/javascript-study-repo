let arr=[1,2,3,4]
let initialValue=0

//reduce function learning
let newArr=arr.reduce(
    (acuumalator,currentValue)=>acuumalator+currentValue,
    initialValue
    
);
//console.log(newArr)


//Here using another way
newArr=arr.reduce(function(acc,currVal){
    //console.log(`acc:${acc} and currVal:${currVal}`);
    
    return acc+currVal
},0)
//console.log(newArr);


//by using callBack function
newArr=arr.reduce((acc,cur)=>{
    console.log(`acc:${acc} and curr:${cur}`);
    
    return acc+cur
},10)
console.log(newArr);


const obj=[
    {
        name:"js course",
        price:500
    },
    {
        name:"java",
        price:2000
    }
]

let priceToPay=obj.reduce((acc,data)=>(acc+data.price),0)
console.log(priceToPay);


