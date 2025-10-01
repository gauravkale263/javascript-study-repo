
const attemptsInfo=document.getElementById('attemptsInfo');
const previousGuesses=document.getElementById('previousGuesses');
const restartButton=document.getElementById('restartButton');
const guessButton=document.getElementById('guessButton');
const message=document.getElementById('message');
let randomNumber=parseInt(Math.floor(Math.random()*100+1));


let attemptsLeft=10;
let guesses=[];

guessButton.addEventListener('click',function(){
    
    const guessInput=document.getElementById('guessInput').value;
    //check if input is valid
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
                randomNumber=parseInt(Math.floor(Math.random()*100+1));
                console.log(randomNumber);
                message.innerHTML=`<span class="text-success">Congratulations! You guessed the correct number! A new number has been generated. Start guessing!</span>`;
            })();
        }
        else if(guessInput<randomNumber){
            message.textContent="Too low! Try again.";
            //alert("Too low! Try again.");
        }
        else{
            message.innerHTML=`<span class="text-danger">Too high! Try again</span>`;
            //alert("Too high! Try again.");
        }   
        if(attemptsLeft==0 && guessInput!=randomNumber){
            clearInput();
            message.innerHTML=`<span class="text-danger">Game Over! The correct number was ${randomNumber}.</span>`;
            //alert(`Game Over! The correct number was ${randomNumber}.`);
            //guessInput.setAttribute('disabled','');
            restartGame();
            
        }
      clearInput();
    } 
    
});

function clearInput(){
    document.getElementById('guessInput').value='';
}

restartButton.addEventListener('click',restartGame)

function restartGame(){
    
        randomNumber=parseInt(Math.floor(Math.random()*100+1));
        console.log(randomNumber);
        attemptsLeft=10;
        guesses=[];
        attemptsInfo.innerHTML=`<strong>Attempts Left:</strong> <span class="badge bg-danger">${attemptsLeft}</span>`;
        previousGuesses.innerHTML=`<strong>Previous Guesses:</strong> <span class="text-muted">—</span>`;
        document.getElementById('guessInput').value='';
        message.innerHTML=`<span class="text-primary">Game has been reset. Start guessing the new number!</span>`;
}

