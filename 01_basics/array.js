let arr=[5,4,2,11,33];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr);

function spread(arrVal,...spread){
    console.log(arrVal);
    console.log(spread);
    
}

spread(1,2,3,4,5)