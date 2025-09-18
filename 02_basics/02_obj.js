const obj = {
    name:"Gaurav",
    email:"kale@gmail.com"
}

let obj1={
    mobile:55555
}


let giveData=({name})=>{
    console.log(name);    
}
giveData({name:"Gaurav Kale"})


// //gives keys of object
// console.log(Object.keys(obj));

// //gives value of object
// console.log(Object.values(obj));

// const obj2=Object.assign({},obj,obj1)

// console.log(obj2);

// console.log({...obj,...obj1});

// const {"name":myName}=obj
// console.log(myName);


