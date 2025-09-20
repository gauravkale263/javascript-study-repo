

let data = 1

while(data<=10){
    //console.log(data);
    data+=2
}


let myArr=["a","b","c"]
let i=0
while(i<myArr.length){
    console.log(`The array value ${myArr[i]}`);  //this is injection of variable
    i++
}


//first executed then condition is checked

let num=12
do{
    console.log(num); //will execute without condition check , but only once if condition fails
    num++

}while(num<=10)