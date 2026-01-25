const prompt = require('prompt-sync')();

const string_name="Hello I am Gaurav"
const vowels="aeiouAEIOU"
let A=0
const arr=string_name.toLowerCase()
console.log(arr)
for(let i=0;i<string_name.length;i++){
      if(vowels[0].includes(string_name[i]))
        {
          A++  
        }  
}
console.log(`A:${A}`);


//check string is palindrome or not

const palindromeStrChk=prompt("Enter String: ");
if(palindromeStrChk==palindromeStrChk.split("").reverse().join("")){
  console.log(`${palindromeStrChk} is palindrome string`)
}
else{
  console.log("NOT PALINDROME")
}