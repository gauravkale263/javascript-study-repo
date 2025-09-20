const arr=[1,2,3,4,5,6,7,8,9,10]

let newArr=arr.map((nums)=>nums*2)
//console.log(newArr);


//here we are going to do map chaining
newArr=arr.map((num)=>num*10)
          .map((num)=>num+3)
          .filter((num)=>num>=40)
console.log(newArr);

