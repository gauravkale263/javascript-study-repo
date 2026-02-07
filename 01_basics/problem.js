// let str="Thi@ is ja@va and it's@ @beautiful";
// console.log(str.split("@")
//                 .map(line => line.trim())
//                 .filter(line => line.length > 0)
//                 .join("\n"));


// let str1="Java@is@a@beautiful@language";

// console.log(str1.split("@")
//                 .map(line=>line.trim())
//                 .filter(line=>line.length>0)
//                 .join("\n"));


let arr=[4,2,1,0,3,2,0,10,11,0];
let newArr=[];
let count=0;
let last = arr.length-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        count++;
    }
    else{
        newArr.push(arr[i]);
    }
}
while(count>0){
    newArr.push(0);
    count--;
}
console.log(newArr)

let my_name="Gaurav kale";
my_name.split(" ").map(word=>console.log(word));