//reverse 
let str="javascript";
let newStr="";
for(let i=str.length-1;i>=0;i--){
  newStr+=str[i];
}
console.log(newStr);

//vowel count
let inp="Hello Gaurav";
let validate="aeiouAEIOU";
let count=0;
for(let i=0;i<inp.length;i++){
    if(validate.includes(inp[i])){
        count++;
    }
}
console.log(count);


//palindrome
let inpString="madam";
let copyStr="";
for(let i=inpString.length-1;i>=0;i--){
    copyStr+=inpString[i];
}
if(inpString==copyStr){
    console.log("True");
}
else{
    console.log("False");
}

//first non-repeating character
let samp="swiss";
let freq={};
for(let i=0;i<samp.length;i++){
    let char=samp[i];
    if(freq[char]){
        freq[char]++;
    }
    else{
        freq[char]=1;
    }
}
for(let ch of samp){
    if(freq[ch]==1){
        console.log(ch);
        break;
    }
}

//why reverse() not work on string?
//reverse() is an array method and strings are immutable in JavaScript, meaning they cannot be changed after they are created. To reverse a string, you can convert it to an array, reverse the array, and then join it back into a string. Here's how you can do it:
let str1 = "hello";
let reversedStr = str1.split('').reverse().join('');
console.log(reversedStr); // Output: "olleh"


//reverse a string using recursion
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

let input = "hello";
let reversed = reverseString(input);
console.log(reversed); // Output: "olleh"

//how will above code work?
// The reverseString function takes a string as input and checks if it is empty. If the string is empty, it returns an empty string. Otherwise, it calls itself recursively with the substring of the input string starting from the second character (str.substr(1)) and appends the first character of the input string (str.charAt(0)) to the end of the result. This process continues until the entire string has been processed, effectively reversing the string as it builds up the result from the last character to the first.

//in more detail
// Let's break down the reverseString function step by step:    
// 1. The function takes a string `str` as an argument.
// 2. It checks if the string is empty (`str === ""`). If it is, it returns an empty string. This serves as the base case for the recursion.
// 3. If the string is not empty, the function calls itself recursively with the substring of `str` starting from the second character (`str.substr(1)`). This means that in each recursive call, the first character of the string is removed.
// 4. After the recursive call returns, it appends the first character of the original string (`str.charAt(0)`) to the end of the result from the recursive call.
// 5. This process continues until all characters have been processed, effectively building up the reversed string as the recursion unwinds.