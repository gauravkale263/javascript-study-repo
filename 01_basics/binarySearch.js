//binary search algorithm 

const binarySearch=(arr, key)=>{
    let left=0;
    let right=arr.length-1;
    let mid=Math.floor((left+right)/2);
    while(left<=right){
        if(arr[mid]<key){
            left=mid+1;
        }
        else if(arr[mid]>key){
            right=mid-1;
        }
        else{
            return "Element found";
        }
        mid=Math.floor((left+right)/2);
    }

    return "Not Found";
}

let sortedArray=[3,5,33,43,56,67];
let target=67;
let ans=binarySearch(sortedArray,target);
console.log(ans);
