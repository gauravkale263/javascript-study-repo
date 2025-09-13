//stack memory understand

let number1=100
let number2=number1
number1=300
console.log(number1)
console.log(number2)
//Here the point is that we store the copy of variable not gives refrence to the same value in stack memory

//Leran  about heap memory
let studentInfo={
    name:"Gaurav Kale",
    data:"Nagar"
}
let studentInfo2=studentInfo;
studentInfo2.name="Prasad Kumbhakarn";
console.log(studentInfo)
console.log(studentInfo2);



