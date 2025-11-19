const register=document.getElementById('registrationForm');
register.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('mobile').value;
    let address=document.getElementById('address').value;
    let course=document.getElementById('course').value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let subjects=[];
    document.querySelectorAll('input[name="subjects"]:checked').forEach((checkbox)=>{
        subjects.push(checkbox.value);
    });

    let student={name:name,email:email,phone:phone,address:address,course:course,gender:gender,subjects:subjects};

    fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(data => {
    console.log("Saved:", data);
    })
    // .catch(err => console.error(err));  
});