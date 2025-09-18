//basic syntax of anonymous function
let ans=function(){
    return 100;
}
console.log(ans());

//change the vowel with _

let makeChangeVowel=function(str){
    let vowel="aeiouAEIOU"
    let result="";
    for(let char of str){
        if(vowel.includes(char)){
            result+='_'
        }
        else{
            result+=char
        }
    }
    return result
   
}
let str="GAURAV KALE"
console.log(makeChangeVowel(str))



