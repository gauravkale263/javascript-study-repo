
const prompt = require('prompt-sync')();

let size = parseInt(prompt("Enter array size: "));
let arr = [];
for (let i = 0; i < size; i++) {
	arr.push(prompt(`Enter element ${i + 1}: `));
}

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            // arr[i]=arr[i]+arr[j]
            // arr[j]=arr[i]-arr[j]
            // arr[i]=arr[i]-arr[j]

            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
           }
    }
}
arr.pop()
console.log(arr);


