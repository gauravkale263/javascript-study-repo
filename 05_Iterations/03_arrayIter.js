let mapData=new Map()
mapData.set("Gaurav","Kale")
mapData.set("p","q")

//console.log(mapData);

for(let [key,val] of mapData){  
    console.log(key , "=>" ,val);
}

let arr=[1,3,4,3,2]

for (const element of arr) {  //accessing each element
    console.log(element); 
}

let myObj={
    name:"gaurav",
    email:"gaurav@gmail.com"
}

for (const key in myObj) {
    console.log(`${key} has value ${myObj[key]}`);  //not working
    
}//this is for in loop mostly used for objects

arr.forEach((item,index,arr)=>{
    console.log(index,item,arr);
    
})  //this is mostly used for arr accessing and important one


function add(){
    console.log("Hello");
}
arr.forEach(add)