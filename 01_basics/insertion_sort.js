let arr=[3,2,4,0,5,11];

let len=6;

for(let i=1;i<len;i++){
    let key=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
}

console.log(arr)


for(var i=0;i<3;i++){
    setTimeout(() => console.log(i), 1000);
}