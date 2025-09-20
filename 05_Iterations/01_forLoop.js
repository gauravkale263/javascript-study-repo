const arr=["Thor","SpriderMan","Loki","Iron Man"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
   // console.log(element);
}


//lets understand break and continue

let num=10

for (let i = 0; i <=num; i++) {
    if(i==5){
        console.log(`${i} detected`)
        //break //break execution of whole loop
        continue  //it will continue loop without executing following statements
    }
    console.log(i);
}

//nested for loop

for (let i = 1; i <= 10; i++) { //runs 1 time then
    console.log(`Table of ${i}`);
    for (let j = 1; j <10; j++) { //runs 10 times each
        console.log(i+"*"+j+"="+i*j );
    }       
}