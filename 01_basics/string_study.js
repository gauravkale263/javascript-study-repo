let str="My nAme is gaurav kale";

let vowels='aeiouAEIOU';
let count=0;
for(let i=0;i<str.length;i++){
    if(vowels[0].includes(str[i])){
        count++;
    }
}
console.log(count);
