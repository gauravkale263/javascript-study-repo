const button=document.getElementById('myButton')

button.addEventListener('dblclick',()=>{
    alert("Hello ")
    console.log("Hello , You clicked dblclick ")
});

const clickEvent=document.getElementById('clickEvent')
clickEvent.addEventListener('click',()=>{
    alert("clicked")
});

//keyboard events
const keyEvent=document.getElementById('keyUpEvent')
keyEvent.addEventListener('keydown',(event)=>{
    console.log("You pressed ",event.key)
});

keyEvent.addEventListener('keyup',(event)=>{
    console.log("You released ",event.key)
});