// // easiest way using built-in methods (no reduce): split + forEach
// let inpStr = "javascript is beautifuilkkl";

// let longest = "";
// inpStr.split(' ').forEach( (word)=> {
//     if (word.length > longest.length){
//         longest = word;
//     } 
// });

// console.log(longest);

// //frequency of characters in a string
// let str = "hello world";
// let freq = {};
// for(let i=0;i<str.length;i++){
//     let ch=str[i];
//     if(freq[ch]){
//         freq[ch]++;
//     }
//     else{
//         freq[ch]=1;
//     }
// }
// console.log(freq);

// //frequency of word in string
// const sent="Hello I am from I am";
// let arr=sent.split(' ');
// let frequency={};
// for(let i=0;i<arr.length;i++){
//     let word=arr[i];
//     if(frequency[word]){
//         frequency[word]++;
//     }
//     else{
//         frequency[word]=1;
//     }
// }
// console.log(frequency);

// //anagram string

