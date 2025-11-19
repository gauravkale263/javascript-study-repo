const button=document.querySelectorAll('.colorButton')

const body=document.querySelector('body')

button.forEach((buttonVall) => {
   buttonVall.addEventListener('click',(e)=>{
        //console.log(e);
        console.log(e.target.id)
        switch(e.target.id){
            case 'green':
                body.style.backgroundColor=e.target.id
                break
            case 'red':
                body.style.backgroundColor=e.target.id
                break
            case 'yellow':
                body.style.backgroundColor=e.target.id
                break
            case 'purple':
                body.style.backgroundColor=e.target.id
                break
            default:
                body.style.backgroundColor="while"
        }   
   })
});
