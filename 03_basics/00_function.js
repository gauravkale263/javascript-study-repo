function day(){
    const date=new Date();
    console.log(date.toLocaleDateString());    
}

function myname(){
    console.log("Gaurav Kale is my name , remember!");
    day()
}

function address(){
    console.log("what is your address");
    setTimeout(()=>{
        console.log("inside timeout");
    },1000)
    myname();
}

address();