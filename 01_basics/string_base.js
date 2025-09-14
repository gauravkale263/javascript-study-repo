
const userName="Gaurav Kale "

//split string by requirement like space , comma, etc
console.log(userName.split(' '))


//trim is used to remove space from string which is present at starting and ending
console.log(userName)
console.log(userName.trim())  //removes the space at start as well as end
console.log(userName.trimStart()) //remove the space for staring
console.log(userName.trimEnd())  //removes the space at end

//calculate the length of the string , length is a property not a method so parentheses not used () 
console.log(userName.length);


//we can find out string word by following as they behave like array
console.log(userName[0])

//replace - we can use replace as follow
console.log(userName.replace(' ','-'))  //only replace first occurence
console.log(userName.replaceAll(' ','-')) //replace all means replace everywhere in the string


//substring and slice
console.log(userName.slice(2,8));
console.log(userName.substring(0,6));

