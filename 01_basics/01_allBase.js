let uname="Gaurav Kale"

//this one is anonymous function
const callMe=function(){
    return "Gaurav Kale from callMe function"
}

//console.log(callMe());

//arrow function

(()=>{
 // console.log("This is self calling arrow function");
})()

//callback function

function operation(runFun){
     runFun();
}

operation(function operator(){
    console.log("This is operator");
});



