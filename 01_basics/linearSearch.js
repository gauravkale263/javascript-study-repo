const linearSearch=function(arr,key){
    let check=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            console.log(`Present at ${i} index`);
            check=1;
            break;
        }
    }
    if(check==0){
        console.log("Element not present");
        
    }
}

let arr=[2,4,3,11,13];
let key=13
linearSearch(arr,key)

