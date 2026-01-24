function bubbleSort(arr){

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length-1;j++){
            if(arr[i]<arr[j]){
                arr[i]=arr[i]+arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]=arr[i]-arr[j];
            }
        }
    }

    console.table(arr);
    
}

let arr=[33,2,1,34,2,10,0];

bubbleSort(arr);