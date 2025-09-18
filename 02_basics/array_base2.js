const arr=[10,20,30,22,12]
const arr2=[5,8,9,6]

//toSorted() returns new copy of sorted array in ascending or descending
//console.log(arr2.toSorted((a,b)=>b-a)); //for descending order



//arr.push(arr2)//not working properly
//console.log(arr);


//in this we can concat the array
//const concatedArray=arr.concat(arr2)
//console.log((concatedArray));

//another way of spreading
//const anothArray=[...arr,...arr2]

//console.log(arr.unshift(5,6));
// console.log(arr);

// arr.push(10)
// console.log(arr);

//includes(element,fromIndex)
//includes(element)
//console.log(arr.includes(30,3));

//keys() -returns keys of array 
// const iterator=arr.keys()
// for(const key of iterator){
//     console.log(`${key}`); 
// }

//splice() - return a shallow copy
//console.log(arr.splice(2,5)); //splice(start,end) gives element between array but not include end index





/* what are the different in built array methods
 =>Most importat inbuilt array methods are as follows
   1. pop() - deletes the element at end of the array
   2. push() - add element at end of the array
   3. concat() - merge two arrays together
   4. isArray() - is array or not , if array return 1 else 0
   5. shift() - The shift() method of Array instances removes the first element from an      array and returns that removed element. This method changes the length of the array.
   6. unshift() - The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
   7. join() -The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array
*/

