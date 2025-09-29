
const attemptsInfo=document.getElementById('attemptsInfo');
const previousGuesses=document.getElementById('previousGuesses');
const restartButton=document.getElementById('restartButton');
const guessButton=document.getElementById('guessButton');

let randomNumber=parseInt(Math.floor(Math.random()*100+1));


let attemptsLeft=10;
let guesses=[];

guessButton.addEventListener('click',function(){
    
    const guessInput=document.getElementById('guessInput').value;
    if(guessInput<1 || guessInput>100){
        alert("Please enter a number between 1 and 100");
        return; 
    }
    if(attemptsLeft>0){
        guesses.push(guessInput);
        attemptsLeft--;
        attemptsInfo.innerHTML=`<strong>Attempts Left:</strong> <span class="badge bg-danger">${attemptsLeft}</span>`;
        previousGuesses.innerHTML=`<strong>Previous Guesses:</strong> <span class="text-muted bg-light">${guesses.join(', ')}</span>`;
        if(guessInput==randomNumber){
            alert("Congratulations! You guessed the correct number!");

            
        (()=>{
            attemptsLeft=10;
            guesses=[];
            attemptsInfo.innerHTML=`<strong>Attempts Left:</strong> <span class="badge bg-danger">${attemptsLeft}</span>`;
            previousGuesses.innerHTML=`<strong>Previous Guesses:</strong> <span class="text-muted">—</span>`;
            document.getElementById('guessInput').value='';
        })();

        }
        else if(guessInput<randomNumber){
            alert("Too low! Try again.");
        }
        else{
            alert("Too high! Try again.");
        }   
        if(attemptsLeft==0 && guessInput!=randomNumber){
            alert(`Game Over! The correct number was ${randomNumber}.`);
        }
    }
    
    
});



restartButton.addEventListener('click',function(){
    randomNUmber=parseInt(Math.floor(Math.random()*100+1));
    attemptsLeft=10;
    guesses=[];
    attemptsInfo.innerHTML=`<strong>Attempts Left:</strong> <span class="badge bg-danger">${attemptsLeft}</span>`;
    previousGuesses.innerHTML=`<strong>Previous Guesses:</strong> <span class="text-muted">—</span>`;
    document.getElementById('guessInput').value='';
});
