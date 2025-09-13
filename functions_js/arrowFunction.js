let bubbleSort=(arr)=>{
        //console.table(arr)
        //find array length and iterate
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++)
            {
                if(arr[i]>arr[j])
                {
                    let temp=arr[i]
                    arr[i]=arr[j]
                    arr[j]=temp
                }
            }
        }
        //printing array after sorting
        return arr;
}
console.log("---------Bubble Sort---------")
let arr=[14,3,21,2,34,22,45];
//console.log(arr)
bubbleSort(arr)
console.log(arr)
//console.log("-------------------------------")


//binary search
let binarySearch=(arr,searchItem)=>{
    let start,mid,end;
    start=0
    end=arr.length-1
    while(end>=start){
        //Math.floor gives exact integer value rather than float value
        mid=start+Math.floor((end-start)/2)
        if(arr[mid]==searchItem){
            return mid;
        }
        else if(arr[mid]<searchItem){
            start=mid+1
        }
        else{
            end=mid-1
        }
    }
    return -1
}
//the array should be sorted for binary search
console.log("---------Binary Search---------")
let sortedArray=[5,14,18,19,24,29,37,45]
let keyEle=binarySearch(sortedArray,29)
if(keyEle!=-1){
    console.log("Element is present at "+keyEle+" index")
}
else{
    console.log("Not present")
}
//console.log("------------------------------------");



//linear search using arrow function
//by brute force approach
let linearSearch=(arr,checkValue)=>{
    for(let i=0;i<arr.length;i++){
        //just iterate the array and check the value
        if(arr[i]==checkValue)
        {
            return i;
        }
    }
    return -1;
}
console.log("---------Linear Search---------")
let linearArr=[10,1,23,44,32,44,22]
let indexKey=linearSearch(linearArr,32);
if(indexKey!=-1){
    console.log("Present at "+indexKey)
}
else{
    console.log("NOT PRESENT")
}



