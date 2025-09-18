const symbol01=Symbol()

const obj={
    name:"Gaurav Kale",
    email:"iamgaurav@gmail.com",
    mobile:9623942270,
    [symbol01]:"Gaurav",
    arrOfFlowers:["Rose","Chameli","sunflower"],
    data:{
        address:"Bhavinimgaon",
        City:"pune"
    }
}

//we can't freeze specific property of object because of objects are immutable
//Object.freeze(obj)

obj["mobile"]=9146379655
obj.name="Prasad Kumbhakarn" //this is not preffered way 

//console.log(obj);

const key="data";

console.log(obj[key].address)
